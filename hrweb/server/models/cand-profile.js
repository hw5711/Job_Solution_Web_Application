var mongoose = require('mongoose');

var CanPro = new mongoose.Schema({
    can_num: String,
    fname: String,
    lname: String,
    phone: String,
    email: String,
    address: String,

    job: String,
    company: String,
    location: String,
    fromDate: String,
    toDate: String,
    role: String,

    schoolname: String,
    educationlevel: String,
    startdate: String,
    enddate: String,
    major: String,
    certificate: String,
    certificatefrom: String,
    expirationDate: String

    // work_experience:[{
    //     company: String,
    //     title: String,
    //     start_date: Date,
    //     end_date: Date,
    //     description: String,
    // }],
    // education:[{
    //     school: String,
    //     dgree: String,
    //     major: String,
    //     start_year: Number,
    //     end_year: Number,
    // }]
});

module.exports = mongoose.model('canProfile', CanPro);