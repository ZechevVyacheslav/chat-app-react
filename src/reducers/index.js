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
    }
  },
  { isEditionDialogOpen: false, roomToEdit: {} }
);

export default combineReducers({ form: formReducer, user, rooms, dialogs });
