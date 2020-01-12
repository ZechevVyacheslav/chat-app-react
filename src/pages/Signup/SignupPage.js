import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';

import SignupForm from '../../components/Forms/Signup/SignupForm';

import './SignupPage.less';

class SignupPage extends Component {
  handleSubmit = user => {
    const { register } = this.props;
    register(user);
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
          <h1 className="title form-title">Регистрация</h1>
        </div>
        <div className="page-content__reg-field">
          <SignupForm onSubmit={this.handleSubmit} />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const props = {
    loggedIn
  };
  return props;
};

const mapActionsToProps = {
  register: actions.registerUser
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(SignupPage));
