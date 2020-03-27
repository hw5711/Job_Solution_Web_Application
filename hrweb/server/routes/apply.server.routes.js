const express = require("express");
var mongoose = require('mongoose');

const AppForm = require("../models/form");

const app = express.Router();


app.post("/apply", (req, res, next) => {
    console.log("server test");

    console.log(req.body);

    // const appForm = new AppForm({
    //     firstName: req.body,
    //     // lastName: req.body.lastName,
    // });
        appForm.create(req.body, function (err, post) {
            if (err) return next(err);
            return res.json(post);
        });
        // .then(result => {
        //     res.status(201).json({
        //         message: "application created!",
        //         result: result,
        //     });
        // })
        // .catch(err => {
        //     res.status(500).json({
        //         message: "application create failed!",
        //         error: err
        //     });
        });

// });

module.exports = app;
