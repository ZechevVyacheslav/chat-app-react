import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import Header from '../../components/Header/Header';
import './ChatPage.less';

class ChatPage extends Component {
  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
    //   const { getRooms } = this.props;
    //   const token = localStorage.getItem('token');
    //   getRooms(token);
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main className="page-content">
          <div className="chat">
            <div className="chat__header-section">
              <h3>Чатик</h3>
              <button
                className="waves-effect waves-light btn"
                onClick={this.handleCreateRoomDialogOpen}
              >
                Пригласить пользователей
                <i className="material-icons right">person_add</i>
              </button>
            </div>
            <div className="chat__messages-section"></div>
            <div className="chat__entering-section">
              <TextField
                id="outlined-basic"
                label="Начните писать"
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const props = {
    loggedIn
  };
  return props;
};

const mapActionsToProps = {
  // createRoom: actions.createRoom
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(ChatPage));
