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
});

module.exports = mongoose.model('canProfile', CanPro);


     