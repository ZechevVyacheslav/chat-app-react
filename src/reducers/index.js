import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { handleActions, handleAction } from 'redux-actions';

import * as actions from '../actions/index';

const user = handleActions(
  {
    [actions.registerUserSuccess](state, { payload: { user, token } }) {
      localStorage.setItem('token', token);
      return { ...state, userData: user, loggedIn: true, token };
    },
    [actions.loginUserSuccess](state, { payload: { user, token } }) {
      localStorage.setItem('token', token);
      return { ...state, userData: user, loggedIn: true, token };
    },
    [actions.logoutUser](state) {
      localStorage.removeItem('token');
      localStorage.removeItem('isLoggedIn');
      return { ...state, userData: null, loggedIn: false, token: null };
    }
  },
  { userData: null, loggedIn: false, token: null }
);

const rooms = handleActions(
  {
    [actions.getRoomsSuccess](state, { payload: { rooms } }) {
      return { ...state, rooms };
    },
    [actions.createRoomSuccess](state, { payload: { room } }) {
      const updatedRooms = [...state.rooms, room];
      return { ...state, rooms: updatedRooms };
    },
    [actions.updateRoomSuccess](state, { payload: { updatedRoom } }) {
      const updatedRooms = state.rooms.map(room =>
        room.id === updatedRoom.id ? updatedRoom : room
      );
      return { ...state, rooms: updatedRooms };
    },
    [actions.deleteRoomSuccess](state, { payload: { deletedRoomId } }) {
      const { rooms } = state;
      const filteredRooms = rooms.filter(room => room.id !== deletedRoomId);
      return { ...state, rooms: filteredRooms };
    },
    [actions.logoutUser](state) {
      return { ...state, rooms: null };
    }
  },
  { rooms: null }
);

const dialogs = handleActions(
  {
    [actions.openEditionDialog](state, { payload: { room } }) {
      return { ...state, isEditionDialogOpen: true, roomToEdit: room };
    },
    [actions.closeEditionDialog](state) {
      return { ...state, isEditionDialogOpen: false, roomToEdit: {} };
    },
    [actions.openMessageEditionDialog](state, { payload: { message } }) {
      return {
        ...state,
        isMessageEditionDialogOpen: true,
        messageToEdit: message
      };
    },
    [actions.closeMessageEditionDialog](state) {
      return { ...state, isMessageEditionDialogOpen: false, messageToEdit: {} };
    }
  },
  {
    isEditionDialogOpen: false,
    roomToEdit: {},
    isMessageEditionDialogOpen: false,
    messageToEdit: {}
  }
);

const chat = handleActions(
  {
    [actions.openChat](state, { payload: { chatId } }) {
      return { ...state, chatId };
    },
    [actions.getRoomMessagesSuccess](state, { payload: { roomId, messages } }) {
      if (messages.length === 0) {
        return { ...state, chatId: roomId, chatData: messages };
      }
      // const [firstMessage, ...rest] = messages;
      // const roomId = firstMessage.room.id;
      const sortedChatData = messages.sort((a, b) => a.id - b.id);
      return { ...state, chatId: roomId, chatData: sortedChatData };
    },
    [actions.sendRoomMessageSuccess](state, { payload: { message } }) {
      return { ...state, chatData: [...state.chatData, message] };
    },
    [actions.updateRoomMessageSuccess](state, { payload: { updatedMessage } }) {
      const updatedMessages = state.chatData.map(message => {
        return message.id === updatedMessage.id ? updatedMessage : message;
      });
      return { ...state, chatData: updatedMessages };
    },
    [actions.deleteRoomMessageSuccess](state, { payload: { deletedMessage } }) {
      const filteredMessages = state.chatData.filter(
        message => message.id !== deletedMessage.id
      );
      return { ...state, chatData: filteredMessages };
    },
    [actions.closeChat](state) {
      return { ...state, chatId: null, chatData: null };
    }
  },
  { chatId: null, chatData: null }
);

export default combineReducers({
  form: formReducer,
  user,
  rooms,
  dialogs,
  chat
});
