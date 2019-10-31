const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/projects/:id", (req, res)=>{
    if (req.xhr){
        res.json(req.params.id);
    } else {
        res.render("show");
    }
    
});

let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log('client listening on port ', PORT);
});