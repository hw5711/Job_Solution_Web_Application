var mongoose = require('mongoose');

var AppHistory = new mongoose.Schema({
    candidate_id: String,
    job_id: String,
    job_title: String,
    job_company: String,
    job_location: String,
    job_industryType: String,
    job_type: String,
    job_description: String,
    job_expirationDate: String,
    applyDate: Date, 
});

module.exports = mongoose.model('appHistory', AppHistory);