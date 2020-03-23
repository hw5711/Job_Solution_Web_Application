const mongoose = require('mongoose');

var formSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name can\'t be empty'
    },
    lastName: {
        type: String,
        required: 'Last name can\'t be empty'
    },
    telephone: {
        type: String,
        required: 'Telephone can\'t be empty'
    },
    email: {
        type: String,
        required: 'Email can\'t be empty',
        unique: true
    },
    address: {
        type: String,
        required: 'Address can\'t be empty'
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: 'City can\'t be empty'
    },
    state: {
        type: String,
        required: 'State can\'t be empty'
    },
    zipcode: {
        type: String,
        required: 'Zipcode can\'t be empty'
    },
    jobtitle: {
        type: String
    },
    company: {
        type: String
    },
    fromdate: {
        type: date
    },
    todate: {
        type: date
    },
    roledescription: {
        type: string
    },
    schoolname: {
        type: string,
        required: 'School Name can\'t be empty'
    },
    educationlevel: {
        type: string,
        required: 'Education Level can\'t be empty'
    },
    fromdate: {
        type: date,
        required: 'From Date can\'t be empty'
    },
    todate: {
        type: date,
        required: 'To Date Level can\'t be empty'
    },
    major: {
        type: string,
        required: 'Major can\'t be empty'
    },
    cumulativegpa: {
        type: string,
        required: 'Cumulative GPA can\'t be empty'
    },
    skills: {
        type: string,
        required: 'Skills can\'t be empty'
    },
    accomplishments: {
        type: string,
        required: 'Accomplishments can\'t be empty'
    },
    sponsership: {
        type: string,
        required: 'Sponsership can\'t be empty'
    },
    acknowledgment: {
        type: string,
        required: 'Acknowledgment can\'t be empty'
    },
    gender: {
        type: string,
        required: 'Gender can\'t be empty'
    },
    hispanic: {
        type: string,
        required: 'Hispanic can\'t be empty'
    },
    veteran: {
        type: string,
        required: 'Veteran can\'t be empty'
    },
    disability: {
        type: string,
        required: 'Disability can\'t be empty'
    },
});

mongoose.model('form', formSchema);