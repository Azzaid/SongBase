/**
 * Created by p.zamulko on 05.05.2018.
 */
var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb');

//var uri = "mongodb://Azzaid:cdOWFJqrHLI9VNVM@azzaidmdb-shard-00-00-r422z.mongodb.net:27017,azzaidmdb-shard-00-01-r422z.mongodb.net:27017,azzaidmdb-shard-00-02-r422z.mongodb.net:27017/test?ssl=true&replicaSet=AzzaidMDB-shard-0&authSource=admin";
//MongoClient.connect(uri, function(err, db) {
//if (err) throw err;
//console.log("Database created!");
//db.close();
//});

router.get('/:', function(req, res){
  res.json('index');
});

module.exports = router;