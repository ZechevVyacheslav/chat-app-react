import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StartingPage from './StartingPage';
import SigninPage from './SigninPage';
import SignupPage from './SignupPage';

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
