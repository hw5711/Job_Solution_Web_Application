const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");
const job = require("../models/job");
const canProfile = require("../models/cand-profile");
const appHistory = require("../models/app-history");
const jobFav = require("../models/job-fav");

const app = express.Router();

//the req is empty
app.post("/apply/applied_job", (req, res, next) => {
    appHistory.find({candidate_id: req.body.candidate_id}, function (err, post) {
         if (err) return next(err);
         return res.json(post);
     });
});

//update job candidate info
app.post("/job", (req, res, next) => {
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
        job_expirationDate: req.body.job_expirationDate,
    });

    AppHistory.save()
        .then(result => {
            console.log(" user history created with new user");
        })
        .catch(err => {
            console.log("user history created faild");
        });
});

//search applied job info 
app.post("/apply/applied_jobinfo", (req, res, next) => {
    job.findOne({ job_id: req.body.job_id }, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//search fav job 
app.post("/apply/fav_job", (req, res, next) => {
    jobFav.find({ can: req.body.can}, function (err, post) {
         if (err) return next(err);
         return res.json(post);
     });
});

//search fav job info
app.post("/apply/fav_jobinfo", (req, res, next) => {
    job.findOne({ job_id: req.body.job_id }, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});


//save fav job
app.post("/fav_job", function (req, res, next) {
    jobFav.updateOne({ can: req.body.can_id },
            {$push: { job_id_array: req.body.job_id_array} },
        function (err, post) {
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
