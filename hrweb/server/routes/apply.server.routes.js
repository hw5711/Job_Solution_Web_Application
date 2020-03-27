const express = require("express");
var mongoose = require('mongoose');

const form = require("../models/form");

const app = express.Router();


app.post("/apply", (req, res, next) => {
    console.log("server test");
    console.log(req.body);
    form.create(req.body, function (err, post) {
        if (err) return next(err);
        return res.json(post);
    });
    });

module.exports = app;
