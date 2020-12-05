import React from 'react';
import { Switch, Route } from 'react-router';
import UserLogin from './components/pages/UserLogin';
import Dashboard from './containers/Dashboard';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserLogin} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default Router;