import React, { Component } from 'react';
import '../css/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import deepPurple from 'material-ui/colors/deepPurple';
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
    this.mainTheme = createMuiTheme({
      palete:{
        primary:{
          main:'#ff4400',
        },
      },
    });
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
      <MuiThemeProvider theme={this.mainTheme}>
        <SortableTable data = {this.state.data} columns={columnData} />
        <SearchField search={this.requestData}/>
      </MuiThemeProvider>
    );
  }
}
