const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");
const job = require("../models/job");
const canProfile = require("../models/cand-profile");
const appHistory = require("../models/app-history");

const app = express.Router();

//the req is empty
app.post("/apply/applied_job", (req, res, next) => {
    //  console.log("server test");
    //  console.log(req.body);
    appHistory.find({candidate_id: req.body.candidate_id}, function (err, post) {
         if (err) return next(err);
         return res.json(post);
     });
});

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

    const AppHistory = new appHistory({
        candidate_id: req.body.candidate_id,
        job_id: req.body.job_id,
        job_title: req.body.job_title,
        job_company: req.body.job_company,
        job_location: req.body.job_location,
        job_industryType: req.body.job_industryType,
        job_type: req.body.job_type,
        job_description: req.body.job_description,

    });

    AppHistory.save()
        .then(result => {
            console.log(" user history created with new user");
        })
        .catch(err => {
            console.log("user history created faild");
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
