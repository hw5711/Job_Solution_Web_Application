var mongoose = require('mongoose');

var JobAppHR = new mongoose.Schema({
    job_id: String,
    hr_id: String,
    date: Date,
    can_id: String,
});

module.exports = mongoose.model('jobAppHR', JobHR);