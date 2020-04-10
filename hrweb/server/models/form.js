const mongoose = require('mongoose');

var formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        // required: 'First name can\'t be empty'
    },
    lastName: {
        type: String,
        // required: 'Last name can\'t be empty'
    },
    telephone: {
        type: String,
        // required: 'Telephone can\'t be empty'
    },
    email: {
        type: String,
        // required: 'Email can\'t be empty',
        unique: true
    },
    address: {
        type: String,
        // required: 'Address can\'t be empty'
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        // required: 'City can\'t be empty'
    },
    state: {
        type: String,
        // required: 'State can\'t be empty'
    },
    zipcode: {
        type: String,
        // required: 'Zipcode can\'t be empty'
    },
    job: {
        type: String
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    fromDate: {
        type: Date
    },
    toDate: {
        type: Date
    },
    role: {
        type: String
    },
    schoolname: {
        type: String,
        // required: 'School Name can\'t be empty'
    },
    educationlevel: {
        type: String,
        // required: 'Education Level can\'t be empty'
    },
    startdate: {
        type: Date,
        required: 'From Date can\'t be empty'
    },
    enddate: {
        type: Date,
        required: 'To Date Level can\'t be empty'
    },
    major: {
        type: String,
        // required: 'Major can\'t be empty'
    },
    cumulativegpa: {
        type: Number,
        // required: 'Cumulative GPA can\'t be empty'
    },
    skills: {
        type: String,
        // required: 'Skills can\'t be empty'
    },
    accomplishments: {
        type: String,
        // required: 'Accomplishments can\'t be empty'
    },
    sponsership: {
        type: String,
        // required: 'Sponsership can\'t be empty'
    },
    acknowledgment: {
        type: String,
        // required: 'Acknowledgment can\'t be empty'
    },
    gender: {
        type: String,
        // required: 'Gender can\'t be empty'
    },
    hispanic: {
        type: String,
        // required: 'Hispanic can\'t be empty'
    },
    veteran: {
        type: String,
        // required: 'Veteran can\'t be empty'
    },
    disability: {
        type: String,
        // required: 'Disability can\'t be empty'
    },
});

// mongoose.model('form', formSchema);
module.exports = mongoose.model('form', formSchema);