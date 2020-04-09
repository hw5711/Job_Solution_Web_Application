var mongoose = require('mongoose');

var HrPro = new mongoose.Schema({
    hr_num: String,
    firstName: String,
    lastName: String,
    phone: String,
    title: String,
    company: String,
    startDate: Date,
    note: String,
    contacts: String,
});

module.exports = mongoose.model('hrProfile', HrPro);