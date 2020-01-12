import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './StartingPage.less';

class StartingPage extends Component {
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/rooms');
    }
  }

  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="title website-title">Chat app</h1>
        </div>
        <div className="page-content__nav-menu">
          <div className="nav-menu">
            <Link className="btn-large waves-effect waves-light" to="/signin">
              Войти
            </Link>
            <Link className="btn-large waves-effect waves-light" to="/signup">
              Зарегестрироваться
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const props = {
    loggedIn
  };
  return props;
};

export default connect(mapStateToProps)(withRouter(StartingPage));
