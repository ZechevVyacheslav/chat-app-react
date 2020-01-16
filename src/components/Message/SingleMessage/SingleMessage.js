import React from 'react';
import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

import './SingleMessage.less';

const initialState = {
  mouseX: null,
  mouseY: null
};

const SingleMessage = props => {
  const [state, setState] = React.useState(initialState);

  const handleMessageClick = event => {
    event.preventDefault();
    setState({
      mouseX: event.clientX,
      mouseY: event.clientY
    });
  };

  const handleMessageEditing = (messageId, text) => () => {
    const { openMessageEditionDialog } = props;
    const message = { id: messageId, text };
    openMessageEditionDialog({ message });
    handleClose();
  };

  const handleMessageDeleting = messageId => () => {
    const { deleteRoomMessage, chatId } = props;
    const token = localStorage.getItem('token');

    deleteRoomMessage(chatId, messageId, token);
    handleClose();
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <div onContextMenu={handleMessageClick} className="chat_signle-message">
      <div className="chat_signle-message__avatar">
        <Avatar className="user-avatar">U</Avatar>
      </div>
      <div className="chat_signle-message__username">{props.username}</div>
      <div className="chat_signle-message__text">{props.children}</div>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleMessageEditing(props.id, props.children)}>
          Редактировать
        </MenuItem>
        <MenuItem onClick={handleMessageDeleting(props.id)}>Удалить</MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => {
  const chatId = state.chat.chatId || localStorage.getItem('chatId');
  const props = {
    chatId
  };
  return props;
};

const mapActionsToProps = {
  deleteRoomMessage: actions.deleteRoomMessage,
  openMessageEditionDialog: actions.openMessageEditionDialog
};

export default connect(mapStateToProps, mapActionsToProps)(SingleMessage);
