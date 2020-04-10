var mongoose = require('mongoose');

var img = new mongoose.Schema({
    img: String,
    userInfo: String,
});

module.exports = mongoose.model('img', img);