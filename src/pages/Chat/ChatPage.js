import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import MessageInput from '../../components/Forms/Message/MessageInput';
import SingleMessage from '../../components/Message/SingleMessage';
import EditMessageDialog from '../../components/Dialogs/EditMessage/EditMessageDialog';
import './ChatPage.less';

class ChatPage extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
    const { getRoomMessages, chatId } = this.props;
    const token = localStorage.getItem('token');
    getRoomMessages(chatId, token);
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { chatData } = this.props;
    let messages;
    if (!chatData) {
      messages = null;
    } else {
      messages = chatData.map(message => {
        return (
          <SingleMessage
            key={message.id}
            id={message.id}
            username={message.user.username}
          >
            {message.text}
          </SingleMessage>
        );
      });
    }

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
            <div className="chat__messages-section">
              {messages}
              <div
                style={{ float: 'left', clear: 'both' }}
                ref={el => {
                  this.messagesEnd = el;
                }}
              ></div>
            </div>
            <div className="chat__entering-section">
              <MessageInput />
            </div>
          </div>
          <EditMessageDialog />
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
