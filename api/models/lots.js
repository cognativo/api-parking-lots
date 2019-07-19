    'use strict'

const db = require('../database/db')
const mongoose = require('mongoose')

const lotSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    number: Number,
    identification : String
});
 
var LotModel = mongoose.model("lots", lotSchema);
 
module.exports = LotModel;