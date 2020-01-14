import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

import Header from '../../components/Header/Header';
import MessageInput from '../../components/Forms/Message/MessageInput';
import './ChatPage.less';

class ChatPage extends Component {

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
    const { getRoomMessages, chatId } = this.props;
    const token = localStorage.getItem('token');
    getRoomMessages(chatId, token);
  }

  render() {
    const { chatData } = this.props;
    const messages = !chatData
      ? null
      : chatData.map(message => {
          return (
            <div key={message.id} className="chat_signle-message">
              <div className="chat_signle-message__avatar">
                <Avatar className="user-avatar">U</Avatar>
              </div>
              <div className="chat_signle-message__username">
                {message.user.username}
              </div>
              <div className="chat_signle-message__text">{message.text}</div>
            </div>
          );
        });

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
            <div className="chat__messages-section">{messages}</div>
            <div className="chat__entering-section">
              <MessageInput />
            </div>
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const chatId = state.chat.chatId || localStorage.getItem('chatId');
  const chatData = state.chat.chatData;
  const props = {
    loggedIn,
    chatId,
    chatData
  };
  return props;
};

const mapActionsToProps = {
  getRoomMessages: actions.getRoomMessages
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(ChatPage));
