var mongoose = require('mongoose');

var JobHR = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    date: Date,
});

module.exports = mongoose.model('JobHR', JobHR);