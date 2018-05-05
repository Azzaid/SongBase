/**
 * Created by p.zamulko on 05.05.2018.
 */
var express = require('express');
var router = require('./routes/route.js');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '../client'));

app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

module.exports=app;