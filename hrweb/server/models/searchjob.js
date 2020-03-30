var mongoose = require('mongoose');

var searchJobSchema = new mongoose.Schema({
    jobTitle: String, 
    jobType: String,
    location: String,
    industryType: String,
    company: String,
    jobDescription: String,
});

module.exports = mongoose.model('searchjob', searchJobSchema);