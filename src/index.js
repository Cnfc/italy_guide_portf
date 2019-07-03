import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from 'Root';
import Layout from './HOC/Layout';
import App from 'components/App/App';
import Analize from 'components/Analize';

import './tools/css/style.css';
import './tools/css/font.css';


ReactDOM.render(
  <Root>
    <Layout>
      <BrowserRouter >
        <Route path='/' exact component={App} />
        <Route path='/Analize' component={Analize} />
      </BrowserRouter>
    </Layout>
  </Root>,
  document.getElementById('root')
);




