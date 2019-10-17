const express = require('express');
const router = express.Router();

const Projects = require('../models/project');

router.get('/', (req, res)=>{
    Projects.find({}, (err, foundProjects)=>{
        if (!err){
            res.json(foundProjects);
        } else {
            res.status(404);
        }
    });
});

module.exports = router;