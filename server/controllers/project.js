const express = require('express');
const router = express.Router();

const Projects = require('../models/project');

router.get('/', (req, res)=>{
    Projects.find({}, (err, foundProjects)=>{
        if (!err){
            res.json(foundProjects);
        } else {
            return res.status(404);
        }
    });
});

router.post('/', async function (req, res){
    req.body.project.title = req.sanitize(req.body.project.title);
    req.body.project.description = req.sanitize(req.body.project.description);
    let projectData = req.body.project;
    await Projects.create(projectData, (err, createdProject)=>{
        return createdProject;
    });
}); 

module.exports = router;