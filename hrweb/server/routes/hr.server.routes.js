const express = require("express");
var mongoose = require('mongoose');

const job = require("../models/job");
const hrProfile = require("../models/hr-profile");
const canProfile = require("../models/cand-profile");

const app = express.Router();

//hr post job
app.post("/create_job", function (req, res, next) {
    job.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//hr check posted jobs
app.post("/posted_job", function (req, res, next) {
    job.find({ hr_id: req.body.hr_id}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//hr delete or update posted jobs
//add it later as needed


//hr get list of candidate , return candidate array back to the front end
app.post("/candidate_list", function (req, res, next) {
    job.find({job_id: req.body.job_id}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//hr get specific candidates profile
app.post("/check_candidate", function (req, res, next) {
    canProfile.findOne({ can_id: req.body.can_id }, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});


//hr update profile
app.put("/update", function (req, res, next) {
    const hrprofile = new hrprofile({
        //_id: req.body._id,
        hr_id: req.body.hr_id,
        join_date: req.body.join_date,
        fnamd: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        title_at_work: req.body.title_at_work,
        company: req.body.company,
        start_work_date: req.body.start_work_date,
    });

    hrProfile.updateOne(
        { hr_id: req.body.hr_id },
        {
            join_date: req.body.join_date,
            fnamd: req.body.fname,
            lname: req.body.lname,
            phone: req.body.phone,
            title_at_work: req.body.title_at_work,
            company: req.body.company,
            start_work_date: req.body.start_work_date,
        },
        function (err, result) {
            if (result.n > 0) {
                res.status(200).json({ message: "Update successful!" });
            } else {
                res.status(401).json({ message: "Not authorized!" });
            }
        });

});


module.exports = app;