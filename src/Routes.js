import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './HOC/Layout';

import Home from './components/Home';
// import RegisterLogin from './components/Register_login';
// import Register from './components/Register_login/register';
// import UserDashboard from './components/User';


const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>
    </Layout>
    
  )
}

export default Routes;