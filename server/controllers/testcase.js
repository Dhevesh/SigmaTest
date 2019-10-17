const express = require('express');
const router = express.Router( {mergeParams : true } );

const TestCases = require('../models/testcase');
const TestSuite = require('../models/testsuites');

router.get('/', (req, res)=>{
    TestCases.find({}, (err, foundTestCases)=>{
        if (!err){
            res.json(foundTestCases);
        } else {
            res.status(404);
        }
    });
});

module.exports = router;