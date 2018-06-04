// var mongoose = require('mongoose')

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    name: String,
    buyer: String,
    price: Number,
    category: String,
    eaten: Boolean,
    expiry_date: { type: Date },
    memo: String,
});

module.exports = mongoose.model('food', foodSchema);