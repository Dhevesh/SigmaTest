const express = require('express');
const router = express.Router( { mergeParams : true } );

const TestRuns = require('../models/testruns');
const TestSuites = require('../models/testsuites');

router.get('/', (req, res)=>{
    TestRuns.find({}, (err, foundTestRuns)=>{
        if (!err){
            res.json(foundTestRuns);
        } else {
            res.status(404);
        }
    });
});

module.exports = router;