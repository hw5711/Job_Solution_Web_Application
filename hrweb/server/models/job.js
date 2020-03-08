var mongoose = require('mongoose');

var Job = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    company: String,
    title: String,
    date: Date,
    expiration: Date,
    description: String,
    field: String,
    level: String,
    location: String,
    candidate: [{
        candidate_id : String,
        rank: Number,
        applyDate: Date,
    }]
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('job', Job);