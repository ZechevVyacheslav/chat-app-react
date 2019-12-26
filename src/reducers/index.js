import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/index';

const user = handleActions(
  {
    [actions.registerUserSuccess](state, { payload: { user, token } }) {
      return { userData: user, token };
    }
  },
  {}
);

export default combineReducers({ form: formReducer, user });
