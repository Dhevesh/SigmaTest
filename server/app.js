const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded( { extended : true } ));

mongoose.connect('mongodb://localhost:27017/sigmatest_db',  { useNewUrlParser : true, useUnifiedTopology : true } );

let simpleJSONResponse = { myDummyData : 'This is a dummy data response' };

app.get('/', (req, res)=>{
    
});







let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('serving app on port ' + PORT);
});
