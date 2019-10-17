const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    title : String,
    description : String,
    testruns : [ { type : mongoose.Schema.Types.ObjectId } ],
    testsuites : [ { type : mongoose.Schema.Types.ObjectId } ],
    members : [ { type : mongoose.Schema.Types.ObjectId } ]
}, { timestamps : true } );

let Project = mongoose.model('Project', projectSchema);
module.exports = Project;
