var mongoose = require('mongoose');

var Job = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    company: String,
    title: String,
    postdate: Date,
    expiration: Date,
    description: String,
    field: String,
    level: String,
    location: String,
    // updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', Job);