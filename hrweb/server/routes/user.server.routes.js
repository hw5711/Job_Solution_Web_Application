const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require('crypto');
const hrProfile = require("../models/hr-profile");
const canProfile = require("../models/cand-profile");


require('dotenv').config();
const nodemailer = require('nodemailer');

const User = require("../models/user");
const passwordResetToken = require("../models/resettoken");
//when create an account, post a new account with userID
// const Account = require("../models/account");

const router = express.Router();

router.post("/register", (req, res, next) => {
    console.log("register info: ",req.body.email, req.body.password, req.body.role);

    bcrypt.hash(req.body.password, 10).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            role: req.body.role
        });

        const userEmailCheck = User.findOne({
            email: req.body.email
        });
        if(!userEmailCheck){
            return res.status(409).json({message: "Email already exist"});
        }
        else{
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: "User created!",
                        result: result,
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message: "User create failed!",
                        error: err
                    });
                });

            //if it's a hr regited 
            if (req.body.role == "HR"){

                const profile = new hrProfile({
                    hr_id: req.body.email,
                    firstName: "",
                    lastName: "",
                    phone: "",
                    title: "",
                    company: "",
                    startDate: "",
                    note: "", 
                    contacts: ""
                });

                profile.save()
                    .then(result => {
                        console.log(" hr account created with new user" , profile.hr_id);
                    })
                    .catch(err => {
                        console.log("hr account created faild");
                    });
            }else{

                const canprofile = new canProfile({
                    can_id: req.body.email,
                    fname: "",
                    lname: "",
                    phone: "",
                    work_experience:[{
                        company: "",
                        title: "",
                        start_date: "",
                        end_date: "",
                        description: "",
                    }],
                    educxation: [{
                        school: "",
                        dgree: "",
                        major: "",
                        start_year: "",
                        end_year: ""
                    }]
                });
                
                canprofile.save()
                    .then(result => {
                        console.log(" hr account created with new user");
                    })
                    .catch(err => {
                        console.log("hr account created faild");
                    });
            }
            
        }
    });
});

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "1Auth failed"
                });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "2Auth failed"
                });
            }
            const token = jwt.sign(
                { email: fetchedUser.email, userId: fetchedUser._id },
                "secret_this_should_be_longer",
                { expiresIn: "1h" }
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fetchedUser._id,
                userRole: fetchedUser.role,
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "3Auth failed"
            });
        });
});

router.post("/retrive", (req, res, next) => {
    console.log("server side retrive", req.body);
    const userEmailExist = User.findOne({
        email: req.body.email
    });
    if (!userEmailExist) {
        return res
            .status(409).json({ message: 'Email does not exist' });
    }

    var resettoken = new passwordResetToken({ 
        email: req.body.email,
        token: crypto.randomBytes(16).toString('hex')
        });

    console.log("1server token : ", resettoken);
    
    resettoken.save()
        .then(result => {
            passwordResetToken.find({ email: req.body.email, token: { $ne: resettoken.token } }).deleteOne().exec();
            console.log("2server token : ", resettoken);
            res.status(200).json({ message: 'Reset Password successfully.' });

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                // secure: false,
                // port: 25,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWOARD
                    // user: 'stuendtactivityweb@gmail.com',
                    // pass: '!stu1234'
                }
            });
            var mailOptions = {
                to: req.body.email,
                from: 'HR web project',
                subject: 'HR web Password Reset',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'http://localhost:4200/valid/' + resettoken.token + '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            }
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Email sent!!!');
                // console.log(data);
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "User create failed!",
                error: err
            });
        });
});

router.post("/valid", (req, res, next) => {
        if (!req.body.resettoken) {
            return res
                .status(500)
                .json({ message: 'Token is required' });
        }
        const user =  passwordResetToken.findOne({
            token: req.body.resettoken
        });
        if (!user) {
            return res
                .status(409)
                .json({ message: 'Invalid URL' });
        }
        User.findOneAndUpdate({ email: user.email }).then(() => {
            res.status(200).json({ message: 'Token verified successfully.' });
        }).catch((err) => {
            return res.status(500).send({ msg: err.message });
        });
    // },
});

router.post("/reset", (req, res, next) => {
    passwordResetToken.findOne({ token: req.body.resettoken }, function (err, userToken, next) {
        console.log("output userToken", userToken);
        if (!userToken) {
            return res
                .status(409)
                .json({ message: 'Token has expired' });
        }

        User.findOne({
            email: userToken.email
        }, function (err, userEmail, next) {
            if (!userEmail) {
                return res
                    .status(409)
                    .json({ message: 'User does not exist' });
            }
            return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                if (err) {
                    return res
                        .status(400)
                        .json({ message: 'Error hashing password' });
                }
                userEmail.password = hash;
                userEmail.save(function (err) {
                    if (err) {
                        return res
                            .status(400)
                            .json({ message: 'Password can not reset.' });
                    } else {
                        userToken.remove();
                        return res
                            .status(201)
                            .json({ message: 'Password reset successfully' });
                    }

                });
            });
        });

    })

});
module.exports = router;
