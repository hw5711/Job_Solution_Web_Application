var mongoose = require('mongoose');

var Job = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    company: String,
    title: String,
    startDate: Date,
    expirationDate: Date,
    jobDescription: String,
    industryType: String,
    jobType: String,
    location: String,
    candidate: [{
        candidate_id : String,
        rank: Number,
        applyDate: Date,
        status: String,
    }]
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('job', Job);