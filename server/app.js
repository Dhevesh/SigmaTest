const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');

const projectRoutes = require('./controllers/project');
const testRunRoutes = require('./controllers/testruns');
const testSuitesRoutes = require('./controllers/testsuites');
const testCaseRoutes = require('./controllers/testcase');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());

mongoose.connect('mongodb://localhost:27017/sigmatest_db', { useNewUrlParser: true, useUnifiedTopology: true });

let simpleJSONResponse = { myDummyData: 'This is a dummy data response' };

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

app.use('/project', projectRoutes);
app.use('/project/:id/testruns', testRunRoutes);
app.use('/project/:id/testsuites', testSuitesRoutes);
app.use('/project/:id/testsuite/:testsuite_id/testcases', testCaseRoutes);

app.get('/', (req, res) => {
    res.json(simpleJSONResponse);
});







let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('serving app on port ' + PORT);
});
