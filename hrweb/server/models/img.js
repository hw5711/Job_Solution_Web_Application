var mongoose = require('mongoose');

var img = new mongoose.Schema({
    img: 
      { data: Buffer, contentType: String },
    userInfo: String,
});

module.exports = mongoose.model('img', img);