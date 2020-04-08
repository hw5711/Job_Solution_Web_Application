const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");
const job = require("../models/job");

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



module.exports = app;
