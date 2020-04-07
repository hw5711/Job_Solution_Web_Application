var mongoose = require('mongoose');

var HrPro = new mongoose.Schema({
    hr_id: String,
    firstName: String,
    lastName: String,
    phone: Number,
    title: String,
    company: String,
    startDate: Date,
    note: String,
    contacts: String,
});

module.exports = mongoose.model('hrProfile', HrPro);