const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
mongoose.Promise = require('bluebird');
mongoose.set('useFindAndModify', false);
// const Textbook = require("./models/textbook");
// const Activities = require("./models/activities");

const userRoutes = require("./routes/user.server.routes");
// const activitiesRoutes = require("./routes/activities.server.routes");

const app = express();
app.use(cookieParser());
//app.set('view engine', 'ejs');
//app.use(express.static('public'));

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
// app.use("/activities", activitiesRoutes);

module.exports = app;