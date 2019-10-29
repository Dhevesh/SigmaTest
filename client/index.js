const express = require('express');
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/projects/:id/show", (req, res)=>{
    res.render("show");
});

let PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log('client listening on port ', PORT);
});