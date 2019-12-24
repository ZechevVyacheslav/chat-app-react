import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/StartingPage.less';

class StartingPage extends Component {
  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="page-content__title--website-title">Chat app</h1>
        </div>
        <div className="page-content__nav-menu">
          <div className="nav-menu">
            <Link className="btn-large waves-effect waves-light" to="/login">
              Войти
            </Link>
            <Link className="btn-large waves-effect waves-light" to="/signin">
              Зарегестрироваться
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default StartingPage;
