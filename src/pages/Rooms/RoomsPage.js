import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import './RoomsPage.less';

class RoomsPage extends Component {
  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main className="page-content">
          <div className="page-content__rooms-list">
            <ul className="collection with-header">
              <li className="collection-header center-align">
                <h4>Комнаты</h4>
              </li>
              <li className="collection-item">
                <div className="rooms-list__room">
                  Комната 1
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
              </li>
              <li className="collection-item">
                <div className="rooms-list__room">
                  Комната 2
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
              </li>
              <li className="collection-item">
                <div className="rooms-list__room">
                  Комната 3
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">delete</i>
                  </a>
                  <a href="#!" className="secondary-content">
                    <i className="material-icons">edit</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </>
    );
  }
}

export default RoomsPage;
