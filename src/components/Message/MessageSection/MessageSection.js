import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import SingleMessage from '../SingleMessage/SingleMessage';
import MessageInput from '../../Forms/Message/MessageInput';
import './MessageSection.less';

const MessageSection = props => {
  const { chatData } = props;
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

  let messagesEnd = React.useRef();

  useEffect(() => {
    messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);

  return (
    <>
      <div className="messages-section__messages">
        {messages}
        <div style={{ float: 'left', clear: 'both' }} ref={messagesEnd}></div>
      </div>
      <div className="messages-section__input">
        <MessageInput />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const chatData = state.chat.chatData;
  const props = {
    chatData
  };
  return props;
};

export default connect(mapStateToProps)(MessageSection);
