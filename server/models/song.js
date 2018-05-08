/**
 * Created by Johanas on 06.05.2018.
 */
var mongoose = require('mongoose');

var uri = "mongodb+srv://Azzaid:cdOWFJqrHLI9VNVM@azzaidmdb-r422z.mongodb.net/test";

var dbConnection = mongoose.createConnection(uri);

var songSchema = mongoose.Schema({
  id: Number,
  artist: String,
  song: String,
  genre: String,
  year: String,
});

module.exports = dbConnection.model('Song', songSchema);