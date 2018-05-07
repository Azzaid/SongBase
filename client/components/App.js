import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SortableTable from './SortableTable';
import SearchField from './SearchField';

const columnData = [
  { id: 'artist', disablePadding: false, alignTooltipToLeft:false, label: 'Исполнитель' },
  { id: 'song', disablePadding: false, alignTooltipToLeft:true, label: 'Песня' },
  { id: 'genre', disablePadding: false, alignTooltipToLeft:true, label: 'Жанр' },
  { id: 'year', disablePadding: false, alignTooltipToLeft:true, label: 'Год' },
];

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: props.data
    };
    console.log('made!');
  }
  
  requestData = (artist, song, genre, year) => {
    fetch('/info/'+(artist?artist:'_')+'/'+(song?song:'_')+'/'+(genre?genre:'_')+'/'+(year?year:'_'))
    .then(res => res.json())
    .then(songlist => {
      console.log("requester got from db", songlist);
      this.setState({data:songlist});
    });
  };

  render() {
    console.log("app state in render is:", this.state);
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SortableTable data = {this.state.data} columns={columnData} />
        <SearchField search={this.requestData}/>
      </div>
      </MuiThemeProvider>
    );
  }
}
