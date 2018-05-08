import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './components/themes/defaultDarktheme';

fetch('/info/')
  .then(res => res.json())
  .then(data => {
    ReactDOM.render(
      <MuiThemeProvider theme={theme}>
      <App data={data}/>
      </MuiThemeProvider>
      , document.getElementById('root'));
  });
