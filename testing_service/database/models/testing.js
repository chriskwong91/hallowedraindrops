// schema for restaurants
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var testingSchema = new Schema({
  question_name: String,
  dArr: String
});

var Test = mongoose.model('Test', testingSchema);

module.exports = Test;
