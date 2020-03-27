const express = require("express");
var mongoose = require('mongoose');

const appForm = require("../models/form");

const app = express.Router();


app.post("/apply", (req, res, next) => {
    console.log("server test");
    console.log(req.body);

});

module.exports = app;
