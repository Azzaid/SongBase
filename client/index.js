import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './colorThemes/redGradientTheme';
import CssBaseline from 'material-ui/CssBaseline';

fetch('/info/')
  .then(res => res.json())
  .then(data => {
    ReactDOM.render(
      <MuiThemeProvider theme={theme}>
        <CssBaseline/>
      <App data={data}/>
      </MuiThemeProvider>
      , document.getElementById('root'));
  });
