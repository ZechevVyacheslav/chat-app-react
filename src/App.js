import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StartingPage from './pages/Start/StartingPage';
import SigninPage from './pages/Signin/SigninPage';
import SignupPage from './pages/Signup/SignupPage';
import RoomsPage from './pages/Rooms/RoomsPage';

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
        <Route path="/rooms" exact>
          <RoomsPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
