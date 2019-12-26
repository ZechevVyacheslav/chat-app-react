import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StartingPage from './pages/Start/StartingPage';
import SigninPage from './pages/Signin/SigninPage';
import SignupPage from './pages/Signup/SignupPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <StartingPage />
        </Route>
        <Route path="/signin" exact>
          <SigninPage />
        </Route>
        <Route path="/signup" exact>
          <SignupPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
