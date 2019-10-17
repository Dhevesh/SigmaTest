const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const testSuiteSchema = new Schema({
    title : String,
    testcases : [ { type : mongoose.Schema.Types.ObjectId } ]
}, { timestamps : true } );

let TestSuite = mongoose.model('TestSuite', testSuiteSchema);

module.exports = TestSuite;