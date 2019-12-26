import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
// import uuid from 'uuid/v4';

import SignupForm from '../../components/Forms/Signup/SignupForm';

import './SignupPage.less';

class SignupPage extends Component {
  handleSubmit = user => {
    const { register } = this.props;
    register(user);
  };

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

const mapActionsToProps = {
  register: actions.registerUser
};

export default connect(null, mapActionsToProps)(SignupPage);
