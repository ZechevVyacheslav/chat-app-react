import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './SignupPage.less'

class SigninPage extends Component {
  render() {
    return (
      <main className="page-content">
        <div className="page-content__title">
          <h1 className="title form-title">Регистрация</h1>
        </div>
        <div className="page-content__reg-field">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="validate"
                  ></input>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="validate"
                  ></input>
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="validate"
                  ></input>
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row button-group">
                <div className="input-field col s6 button-group__button-section">
                  <button type="submit" className="btn waves-effect waves-light button-section__enter ">
                    Войти
                  </button>
                </div>
                <div className="input-field col s6 button-group__button-section">
                  <Link
                    to="/"
                    className="btn waves-effect waves-light button-section__return"
                  >
                    Вернуться на главную
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default SigninPage;
