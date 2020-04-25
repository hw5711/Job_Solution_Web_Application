const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");
const job = require("../models/job");
const canProfile = require("../models/cand-profile");
const appHistory = require("../models/app-history");
const jobFav = require("../models/job-fav");
const ApplicationForm = require("../models/application");

const app = express.Router();

//get application form from a candidate
app.post("/apply/application", (req, res, next) => {
    // console.log("req of appliform is : ", req.body);
    const applicationForm = new ApplicationForm({
        candidate_num: req.body.candidate_num,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        email: req.body.email,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        job: req.body.job,
        company: req.body.company,
        location: req.body.location,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        role: req.body.role,
        schoolname: req.body.schoolname,
        educationlevel: req.body.educationlevel,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        major: req.body.major,
        cumulativegpa: req.body.cumulativegpa,
        skills: req.body.skills,
        accomplishments: req.body.accomplishments,
        sponsership: req.body.sponsership,
        acknowledgment: req.body.acknowledgment,
        gender: req.body.gender,
        hispanic: req.body.hispanic,
        veteran: req.body.veteran,
        disability: req.body.disability
    });

    applicationForm.save()
        .then(result => {
            console.log(" user history created with new user");
        })
        .catch(err => {
            console.log("user history created faild");
        });
});

//check application form and send to hr
app.post("/application_check", (req, res, next) => {
    // console.log("req is :" , req.body);
    ApplicationForm.find({ candidate_num: req.body.candidate_num }, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//update candidate application staut, yes or no
app.post("/set_status", (req, res, next) => {
    job.updateOne(
        { 
            "job_id": req.body.job_num,
        },
        { $set: {"candidate.$[candidate].status" : req.body.status } },
        {
            multi: true,
            arrayFilters: [{ "candidate.candidate_id": req.body.candidate_id}]
        },
        function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
});

//update applicant staus by hr
app.post("/application_check", (req, res, next) => {
    ApplicationForm.find({ candidate_num: req.body.candidate_num }, function (err, post) {
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



//after filling out application form and save it in app history
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
        applyDate: req.body.applyDate 

    });

    AppHistory.save()
        .then(result => {
            console.log(" user history created with new user");
        })
        .catch(err => {
            console.log("user history created faild");
        });
});


//searh applied job history and list
app.post("/app-job-history", (req, res, next) => {
    appHistory.find({ candidate_id: req.body.candidate_id }, function (err, post) {
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

//search applied job status
app.post("/apply/applied_jobinfo", function (req, res, next) {
    job.findOne(
        { 
            "job_id": req.body.job_id,
            "candidate.candidate_id": req.body.candidate_id
        },
        function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
});

//delete fav job

app.post("/delete_favjob", function (req, res, next) {
    jobFav.updateOne(
        {"can": req.body.can},
        {
           $pull: { job_id_array: { job_id : req.body.job_id }}
        },
        function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
});



module.exports = app;
