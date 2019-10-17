const express = require('express');
const router = express.Router( { mergeParams : true } );

const TestSuites = require('../models/testsuites');
const Project = require('../models/project');

router.get('/', (req, res)=>{
    TestSuites.find({}, (err, foundTestSuites)=>{
        if (!err){
            res.json(foundTestSuites);
        } else {
            res.status(404);
        }
    });
});

module.exports = router;