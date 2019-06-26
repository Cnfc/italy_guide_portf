import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import * as serviceWorker from './serviceWorker';


import './tools/css/style.css';
import './tools/css/font.css';

ReactDOM.render(
  <BrowserRouter >
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);



serviceWorker.unregister();
