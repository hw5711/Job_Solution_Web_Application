var mongoose = require('mongoose');

var CanPro = new mongoose.Schema({
    can_num: String,
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    work_experience:[{
        company: String,
        job: String,
        location: String,
        fromDate: Date,
        toDate: Date,
        role: String,
    }],
    education:[{
        schoolname: String,
        educationlevel: String,
        major: String,
        startdate: Date,
        enddate: Date,
    }],
    certificate:[{
        certificate: String,
        certificatefrom: String,
        expirationDate: Date,
    }]
});

module.exports = mongoose.model('canProfile', CanPro);


     