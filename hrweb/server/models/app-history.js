var mongoose = require('mongoose');

var AppHistory = new mongoose.Schema({
    candidate_id: String,
    job_id: String,
    job_title: String,
    job_company: String,
});

module.exports = mongoose.model('appHistory', AppHistory);