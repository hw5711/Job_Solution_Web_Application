const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const path = require('path');
var fs = require("fs");
var multer = require('multer');
// var upload = multer({ dest: '/uploads/' })

// const upload = multer({ dest: path.join(__dirname, 'public/upload/temp') });

mongoose.Promise= require('bluebird');

mongoose.Promise.config({
    longStackTraces: false,
    warnings: false
})

mongoose.set('useFindAndModify', false);

const userRoutes = require("./routes/user.server.routes");
const canRoutes = require("./routes/candidate.server.routes");
const applyRoutes = require("./routes/apply.server.routes");
const searchjobRoutes = require("./routes/searchjob.server.routes");
const hrRoutes = require("./routes/hr.server.routes");
const imageRoutes = require("./routes/img.server.routes");

const app = express();

app.use(cookieParser());

// app.use(multer({
//     dest: 'uploads /',
//     rename: function (fieldname, filename) {
//         return filename;
//     },
// }));
//app.set('view engine', 'ejs');
//Use the below line when deploy
// app.use(express.static(path.join(__dirname, 'public')));

mongoose
    // .set('useCreateIndex', true)
    .connect(
        "mongodb+srv://huanwu:ABCD1234@webproject-qhq6u.mongodb.net/test?retryWrites=true&w=majority"
        , {
            useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
        })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

// const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.use("/", userRoutes);
app.use("/cand-profile", canRoutes);
app.use("/jobappform", applyRoutes);
app.use("/searchjob", searchjobRoutes);
app.use("/hr", hrRoutes);
app.use("/images", imageRoutes);

//Use the below line when deploy
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
module.exports = app;