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
app.put("/update", function (req, res, next) {
    const canprofile = new candidateprofile({
        can_id: req.body.can_id,
        fnamd: req.body.fnamd,
        lname: req.body.lname,
        phone: req.body.phone,
        work_experience: [{
            // company: ,
            // title: ,
            // start_date: ,
            // end_date: ,
            // description: ,
        }],
        education: [{
            // school: ,
            // dgree: ,
            // major: ,
            // start_year: ,
            // end_year: ,
        }]
    });

    canprofile.updateOne(
        { can_id: req.body.can_id },
        {

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