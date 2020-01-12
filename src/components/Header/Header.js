import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import './Header.less';

const Header = props => {
  const handleLogoutClick = () => {
    const { logout } = props;
    logout();
  };

  return (
    <nav className="header__content">
      <div className="nav-wrapper">
        <Link to="/rooms" className="brand-logo">
          Chat app
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            {/* Button */}
          </li>
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

export default connect(null, mapActionsToProps)(Header);
