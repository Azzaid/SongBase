import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EnhancedTable from './sortableTable.js';
//import MongoClient from 'mongodb';

//var uri = "mongodb://Azzaid:cdOWFJqrHLI9VNVM@azzaidmdb-shard-00-00-r422z.mongodb.net:27017,azzaidmdb-shard-00-01-r422z.mongodb.net:27017,azzaidmdb-shard-00-02-r422z.mongodb.net:27017/test?ssl=true&replicaSet=AzzaidMDB-shard-0&authSource=admin";
//MongoClient.connect(uri, function(err, db) {
  //if (err) throw err;
  //console.log("Database created!");
  //db.close();
//});

var uri = "mongodb+srv://Azzaid:cdOWFJqrHLI9VNVM@azzaidmdb-r422z.mongodb.net/test";

function formatInput(artist, song, genre, year) {
  return {artist, song, genre, year};
};

var sampleData = [
  formatInput('Cupcake', 305, 3.7, 67),
  formatInput('Donut', 452, 25.0, 51),
  formatInput('Eclair', 262, 16.0, 24),
  formatInput('Frozen yoghurt', 159, 6.0, 24),
  formatInput('Gingerbread', 356, 16.0, 49),
  formatInput('Honeycomb', 408, 3.2, 87),
  formatInput('Ice cream sandwich', 237, 9.0, 37),
  formatInput('Jelly Bean', 375, 0.0, 94),
  formatInput('KitKat', 518, 26.0, 65),
  formatInput('Lollipop', 392, 0.2, 98),
  formatInput('Marshmallow', 318, 0, 81),
  formatInput('Nougat', 360, 19.0, 9),
  formatInput('Oreo', 437, 18.0, 63),
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EnhancedTable data = {sampleData} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
