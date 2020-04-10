const express = require("express");
var mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
var multer = require('multer');
const img = require("../models/img");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

var upload = multer({storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const app = express.Router();

//hr create image
app.post("/update-pic", upload.single('userImage'), function (req, res, next) {
    // console.log("hr id is:" + req.params.id);
    // let num = req.param.id;
    console.log(req.file);
    // const image = new img({
    //     img: req.file.path,
    //     userInfo: num,
    // });

    // image.save(req.body, function (err, post) {
    //     if (err) return next(err);
    //     return res.json(post);
    // });
});

//hr get image
app.post("/get-pic", (req, res, next) => {
    console.log(req.body.userInfo);
    img.findOne({ userInfo: req.body.userInfo })
        .then(account => {
            if (account) {
                res.status(200).json(account);
            } else {
                res.status(404).json({ message: "Account not found!" });
            }
        });
});

module.exports = app;