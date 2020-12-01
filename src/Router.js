import React from 'react';
import { Switch, Route } from 'react-router';
import UserLogin from './components/pages/UserLogin';
import Nothing from './components/pages/Nothing';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserLogin} />
      <Route exact path="/nothing" component={Nothing} />
    </Switch>
  )
}

export default Router;