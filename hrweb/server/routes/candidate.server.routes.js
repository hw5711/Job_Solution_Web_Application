const express = require("express");
var mongoose = require('mongoose');
const job = require("../models/job");
const candidateprofile = require("../models/cand-profile");
const app = express.Router();

//candidate find jobs
app.post("/find_job", function (req, res, next) {
    job.find({ title: req.body.title, date: { $lt: req.body.date }, location: req.body.location}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//candidate update profile
app.put("/:can_id", function (req, res, next) {
    candidateprofile.updateOne(
        { can_id: req.body.can_id },
        {
            can_id: req.body.can_id,
            fnamd: req.body.fnamd,
            lname: req.body.lname,
            phone: req.body.phone,
            work_experience: req.body.work_experience,
            education: req.body.education,
        },
        function (err, result) {
            if (result.n > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        });
});

//retrive default candidate profile
app.post("/get-profile", (req, res, next) => {
    // console.log(" server get can_id # is:", req.params.can_id);
    candidateprofile.findOne({ can_num: req.body.can_num })
        .then(candidate => {
            if (candidate) {
                res.status(200).json(candidate);
            } else {
                res.status(404).json({ message: "Account not found!" });
            }
        });
});

//hr update profile
app.post("/update", function (req, res, next) {
    console.log("update hr profile: ", req.body);
    candidateprofile.updateOne(
        { can_num: req.body.can_num },
        {
            fname: req.body.firstName,
            lname: req.body.lastName,
            phone: req.body.phone,
        },
        function (err, result) {
            if (err) {
                res.status(401).json({ message: "Not authorized!" });
            } else {
                res.status(200).json({ message: "Update successful!" });
            }
        });
});

module.exports = app;