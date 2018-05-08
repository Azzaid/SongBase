import React, { Component } from 'react';
import SortableTable from './SortableTable';
import SearchField from './SearchField';

const columnData = [
  { id: 'artist', disablePadding: false, alignTooltipToLeft:false, label: 'Исполнитель' },
  { id: 'song', disablePadding: false, alignTooltipToLeft:true, label: 'Песня' },
  { id: 'genre', disablePadding: false, alignTooltipToLeft:true, label: 'Жанр' },
  { id: 'year', disablePadding: false, alignTooltipToLeft:true, label: 'Год' },
];

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      data: props.data
    };
  }
  
  requestData = (artist, song, genre, year) => {
    fetch('/info/'+(artist?artist:'_')+'/'+(song?song:'_')+'/'+(genre?genre:'_')+'/'+(year?year:'_'))
    .then(res => res.json())
    .then(songlist => {
      this.setState({data:songlist});
    });
  };

  render() {
    return (
      <div>
        <SortableTable data = {this.state.data} columns={columnData}/>
        <SearchField search={this.requestData}/>
      </div>
    );
  }
};

export default App;