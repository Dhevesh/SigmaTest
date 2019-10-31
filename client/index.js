const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/project/:id", (req, res)=>{
    if (req.xhr){
        res.json(req.params.id);
    } else {
        res.render("show");
    }
    
});

app.get("/project/:id/testruns", (req, res)=>{
    if (req.xhr){
        res.json(req.params.id);
    } else {
        res.render("project/testrun");
    }
});

app.get("/project/:id/testsuites", (req, res)=>{
    if (req.xhr){
        res.json(req.params.id);
    } else {
        res.render("project/testsuite");
    }
});

app.get("/project/:id/testsuites/:testsuite_id/testcases", (req, res)=>{
    if (req.xhr){
        res.json({projectId : req.params.id, testsuiteId : req.params.testsuite_id});
    } else {
        res.render("project/testcase");
    }
});

let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log('client listening on port ', PORT);
});