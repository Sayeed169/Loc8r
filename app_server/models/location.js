var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    name: {type:String, required:true},
    address: {type:String, default:0, min:0, max:5},
    rating: Number,
    facilities:[String],
    coords:{type:[Number], index:'2dsphere'}
});