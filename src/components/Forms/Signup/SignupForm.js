import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import './SignupForm.less';

const SignupForm = props => {
  const clearFormAfterSubmit = user => {
    props.reset();
    props.handleSubmit(user);
  };

  return (
    <div className="row">
      <form className="col s12" onSubmit={clearFormAfterSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <Field
              component="input"
              id="email"
              name="email"
              type="email"
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Field
              component="input"
              id="username"
              name="username"
              type="text"
              className="validate"
            />
            <label htmlFor="username">Username</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <Field
              component="input"
              id="password"
              name="password"
              type="password"
              className="validate"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row button-group">
          <div className="input-field col s6 button-group__button-section">
            <button
              type="submit"
              className="btn waves-effect waves-light button-section__enter "
            >
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
  );
};

export default reduxForm({ form: 'signup' })(SignupForm);
