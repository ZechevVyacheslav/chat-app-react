import { createAction } from 'redux-actions';
import axios from 'axios';

export const registerUserRequest = createAction('USER_REGISTER_REQUEST');
export const registerUserSuccess = createAction('USER_REGISTER_SUCCESS');
export const registerUserFailure = createAction('USER_REGISTER_FAILURE');

export const registerUser = user => dispatch => {
  dispatch(registerUserRequest());
  axios
    .post('http://localhost:3000/register', user)
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(data => {
      dispatch(registerUserSuccess({ user: data.user, token: data.token }));
    })
    .catch(error => {
      console.log(error);
      dispatch(registerUserFailure());
    });
};
