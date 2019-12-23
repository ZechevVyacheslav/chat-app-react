import React, { Component } from 'react';

import '../styles/StartingPage.less';

class App extends Component {
  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="page-content__title--website-title">Chat app</h1>
        </div>
        <div className="page-content__nav-menu">
          <div className="nav-menu">
            <a className="btn-large waves-effect waves-light" href="/login">
              Войти
            </a>
            <a className="btn-large waves-effect waves-light" href="/register">
              Зарегестрироваться
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
