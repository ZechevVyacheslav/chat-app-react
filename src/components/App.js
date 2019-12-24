import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StartingPage from './StartingPage';
import LoginPage from './LoginPage';
import SigninPage from './SigninPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact>
          <StartingPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/signin" exact>
          <SigninPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
