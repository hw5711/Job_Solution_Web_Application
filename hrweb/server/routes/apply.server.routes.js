const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");
const job = require("../models/job");
const canProfile = require("../models/cand-profile");

const app = express.Router();

//the req is empty
// app.post("/apply", (req, res, next) => {
//     console.log("server test");
//     console.log(req.body);
//     form.create(req.body, function (err, post) {
//         if (err) return next(err);
//         return res.json(post);
//     });
//     });

//update job candidate info
app.post("/job", (req, res, next) => {
    // console.log("server test");
    // console.log(req.body);
    job.updateOne({job_id: req.body.job_id},
        { $push: {candidate: req.body.candidate}},
        function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});


app.post("/applied_job", function (req, res, next) {
    form.find({ user_id: req.body.user_id}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

app.get("/:id", (req, res, next) => {
    // console.log(" server get id # is:", req.params.hr_id);
    canProfile.findOne({ user_id: req.params.user_id })
        .then(account => {
            if (account) {
                res.status(200).json(account);
            } else {
                res.status(404).json({ message: "Account not found!" });
            }
    });
});



module.exports = app;
