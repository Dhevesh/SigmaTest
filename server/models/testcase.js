const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const testCaseSchema = new Schema({
    title : String,
    description : String,
    preConditions : String,
    steps : String,
    expectedResults : String,
    actualResults : String,
    status : String
}, { timestamps : true } );

let TestCase = mongoose.model('TestCase', testCaseSchema);

module.exports = TestCase;

