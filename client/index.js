import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

fetch('/info/')
  .then(res => res.json())
  .then(data => {
    ReactDOM.render(<App data={data}/>, document.getElementById('root'));
  });
