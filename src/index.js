import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from 'Root';
import Layout from './HOC/Layout';
import App from 'components/App/App';

import './tools/css/style.css';
import './tools/css/font.css';


ReactDOM.render(
  <Root>
      <BrowserRouter >
        <Route path='/' component={App} />
      </BrowserRouter>
  </Root>,
  document.getElementById('root')
);




