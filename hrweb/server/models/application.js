var mongoose = require('mongoose');

var ApplicationForm = new mongoose.Schema({
    candidate_num: String,
    job_num: String,
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zipcode: String,
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
    cumulativegpa: String,
    skills: String,
    accomplishments: String,
    sponsership: String,
    acknowledgment: String,
    gender: String,
    hispanic: String,
    veteran: String,
    disability: String
});

module.exports = mongoose.model('ApplicationForm', ApplicationForm);