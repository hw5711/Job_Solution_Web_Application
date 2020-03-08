const express = require("express");
var mongoose = require('mongoose');
const job = require("../models/job");
const app = express.Router();

app.post("/find_job", function (req, res, next) {
    job.find({ title: req.body.title, date: { $lt: req.body.date }, location: req.body.location}, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
});

module.exports = app;