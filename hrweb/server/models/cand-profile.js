var mongoose = require('mongoose');

var CanPro = new mongoose.Schema({
    can_id: String,
    fnamd: String,
    lname: String,
    phone: String,
    work_experience:[{
        company: String,
        title: String,
        start_date: Date,
        end_date: Date,
        description: String,
    }],
    education:[{
        school: String,
        dgree: String,
        major: String,
        start_year: Number,
        end_year: Number,
    }]
});

module.exports = mongoose.model('canProfile', CanPro);