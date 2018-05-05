/**
 * Created by p.zamulko on 05.05.2018.
 */
var express = require('express');
var mainPageRouter = require('./routes/mainPage.js');
var dbRequester = require('./routes/dbRequest.js');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', mainPageRouter);
app.use('/info/', dbRequester);



module.exports=app;