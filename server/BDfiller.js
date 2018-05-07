/**
 * Created by Johanas on 06.05.2018.
 */
var mongoose = require('mongoose');
var songModel = require('./models/song');

var songToAdd = new songModel(
  {id: 3,
  artist: "Bauarin",
  song: "Bloody massacre in hell",
  genre: "thrash-glam-grind-rock",
  year: 1994});

songToAdd.save(function (err, songToAdd) {
  if (err) return console.error(err);
  console.log(songToAdd);
});