var mongoose = require('mongoose');

var JobFav = new mongoose.Schema({
    can: String,
    job_id_array:[
        {   job_id: String,
            job_title: String,
            job_type: String, 
            job_location: String, 
            job_company: String, 
            job_expirationDate: Date, 
        }
    ]
});

module.exports = mongoose.model('jobFav', JobFav);