import React from 'react';
import { Link } from 'react-router-dom';

import './Header.less';

const Header = props => {
  return (
    <nav className="header__content">
      <div className="nav-wrapper">
        <Link to="/rooms" className="brand-logo">
          Chat app
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="#" className="waves-effect waves-light btn">
              Создать новую комнату
              <i className="material-icons right">add_box</i>
            </Link>
          </li>
          <li>
            <Link to="/" className="waves-effect waves-light btn">
              Выйти <i className="material-icons right">exit_to_app</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
