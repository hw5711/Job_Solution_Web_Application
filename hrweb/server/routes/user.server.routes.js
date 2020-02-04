const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config();
const nodemailer = require('nodemailer');

const User = require("../models/user");
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
        user.save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result,
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });

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
                userId: fetchedUser._id
            });
        })
        .catch(err => {
            return res.status(401).json({
                message: "3Auth failed"
            });
        });
});


router.post("/retrive", (req, res, next) => {

    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "User not exist"
                });
            }
            fetchedUser = user;

            // Step 1

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: false,
                port: 25,
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWOARD
                    // user: 'stuendtactivityweb@gmail.com',
                    // pass: '!stu1234'
                },
                tls: {
                    rejectUnauthorized: false,
                }
            });



            // Step 2
            let mailOptions = {
                from: 'stuendtactivityweb@gmail.com',
                to: fetchedUser.email,
                subject: 'Retrive your password - Student Activity Web',
                text: 'Your password is ' + user.password
            };

            // Step 3
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return console.log(err);
                }
                console.log('Email sent!!!');
                // console.log(data);
            });

        });
});

module.exports = router;
