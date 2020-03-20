const express = require("express");
var mongoose = require('mongoose');
const job = require("../models/job");
const app = express.Router();

//candidate find jobs
app.post("/find_job", function (req, res, next) {
    job.find({ title: req.body.title, date: { $lt: req.body.date }, location: req.body.location}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

//candidate update profile
// <<<<<<< HEAD
app.put("/:can_id", function (req, res, next) {

//     candidateprofile.updateOne(
// =======
// app.put("/update", function (req, res, next) {
//     const canprofile = new hrprofile({
//         can_id: req.body.can_id,
//         fnamd: req.body.fnamd,
//         lname: req.body.lname,
//         phone: req.body.phone,
//     });

//     hrProfile.updateOne(
// >>>>>>> parent of b8eed98... update
        // { can_id: req.body.can_id },
        // {
        //     can_id: req.body.can_id,
        //     fnamd: req.body.fnamd,
        //     lname: req.body.lname,
        //     phone: req.body.phone,
        //     work_experience: req.body.work_experience,
        //     education: req.body.education,
        // },
        // function (err, result) {
        //     if (result.n > 0) {
        //         res.status(200).json({ message: "Update successful!" });
        //     } else {
        //         res.status(401).json({ message: "Not authorized!" });
        //     }
        // });
});

//retrive candidate profile
app.get("/:can_id", (req, res, next) => {
    console.log(" server get can_id # is:", req.params.can_id);
    candidateprofile.findOne({ can_id: req.params.can_id })
        .then(candidate => {
            if (candidate) {
                res.status(200).json(candidate);
            } else {
                res.status(404).json({ message: "Account not found!" });
            }
        });
});

module.exports = app;