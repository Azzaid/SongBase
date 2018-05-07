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
        label="Artist"
        type="search"
        placeholder="All"
        margin="normal"
        onChange={(event)=>{
          this.setState({artist:event.target.value});
          this.props.search(event.target.value, this.state.song, this.state.genre, this.state.year)}}
      />
      <TextField
        id="searchBySong"
        label="Song"
        type="search"
        placeholder="All"
        margin="normal"
      />
      <TextField
        id="searchByGenre"
        label="Artist"
        type="search"
        placeholder="Genre"
        margin="normal"
      />
      <TextField
        id="searchByYear"
        label="Year"
        type="search"
        placeholder="Year"
        margin="normal"
      />
      </div>
    )
  }
};

export default SearchField;