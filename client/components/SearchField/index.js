/**
 * Created by p.zamulko on 07.05.2018.
 */
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchField extends Component {
  constructor (props){
    super(props);
    this.state={
      artist:'',
      song:'',
      genre:'',
      year:'',
    }
  };

  render () {
    return(
      <div>
      <TextField
        id="searchByArtist"
        label="Исполнитель"
        type="search"
        placeholder="Все"
        margin="normal"
        onChange={(event)=>{
          this.setState({artist:event.target.value});
          this.props.search(event.target.value, this.state.song, this.state.genre, this.state.year)}}
      />
      <TextField
        id="searchBySong"
        label="Песня"
        type="search"
        placeholder="Все"
        margin="normal"
        onChange={(event)=>{
          this.setState({song:event.target.value});
          this.props.search(this.state.artist, event.target.value, this.state.genre, this.state.year)}}
      />
      <TextField
        id="searchByGenre"
        label="Жанр"
        type="search"
        placeholder="Все"
        margin="normal"
        onChange={(event)=>{
          this.setState({genre:event.target.value});
          this.props.search(this.state.artist, this.state.song, event.target.value, this.state.year)}}
      />
      <TextField
        id="searchByYear"
        label="Год"
        type="search"
        placeholder="Все"
        margin="normal"
        onChange={(event)=>{
          this.setState({year:event.target.value});
          this.props.search(this.state.artist, this.state.song, this.state.genre, event.target.value)}}
      />
      </div>
    )
  }
};

export default SearchField;