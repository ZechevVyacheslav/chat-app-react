import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import './Header.less';

const Header = props => {
  const handleLogoutClick = () => {
    const { logout } = props;
    logout();
  };

  const returnButton = /rooms\/\d{2}\/chat/.test(props.location.pathname) ? (
    <Link to="/rooms" className="waves-effect waves-light btn">
      Вернуться на главную{' '}
      <i className="material-icons right">keyboard_backspace</i>
    </Link>
  ) : null;

  // console.log(props.location.pathname);

  return (
    <nav className="header__content">
      <div className="nav-wrapper">
        <Link to="/rooms" className="brand-logo">
          Chat app
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>{returnButton}</li>
          <li>
            <Link
              to="/"
              onClick={handleLogoutClick}
              className="waves-effect waves-light btn"
            >
              Выйти <i className="material-icons right">exit_to_app</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapActionsToProps = {
  logout: actions.logoutUser
};

export default connect(null, mapActionsToProps)(withRouter(Header));
