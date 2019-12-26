import React, { Component } from 'react';

import SigninForm from '../../components/Forms/Signin/SigninForm';

import './SigninPage.less';

class SigninPage extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="title form-title">Авторизация</h1>
        </div>
        <div className="page-content__reg-field">
          <SigninForm onSubmit={this.submit}/>
        </div>
      </main>
    );
  }
}

export default SigninPage;
