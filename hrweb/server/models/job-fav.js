var mongoose = require('mongoose');

var JobFav = new mongoose.Schema({
    can: String,
    job_id_array:[{
        job_id: String,
    }],
    job_title: String,
    // job_location: String,
    // job_industryType: String,
    // job_type: String,
    // job_description: String,
    // job_expirationDate: String,
});

module.exports = mongoose.model('jobFav', JobFav);