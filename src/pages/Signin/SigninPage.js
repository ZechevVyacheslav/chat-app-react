import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';

import SigninForm from '../../components/Forms/Signin/SigninForm';

import './SigninPage.less';

class SigninPage extends Component {
  
  handleSubmit = user => {
    const { login } = this.props;
    login(user);
  };

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/rooms');
    }
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.history.push('/rooms');
    }
  }

  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="title form-title">Авторизация</h1>
        </div>
        <div className="page-content__reg-field">
          <SigninForm onSubmit={this.handleSubmit} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  // const { user } = state;
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const props = {
    loggedIn
  };
  return props;
};

const mapActionsToProps = {
  login: actions.loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(SigninPage));
