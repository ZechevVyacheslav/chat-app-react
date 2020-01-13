import { createAction } from 'redux-actions';
import axios from 'axios';

export const registerUserRequest = createAction('USER_REGISTER_REQUEST');
export const registerUserSuccess = createAction('USER_REGISTER_SUCCESS');
export const registerUserFailure = createAction('USER_REGISTER_FAILURE');

export const loginUserRequest = createAction('USER_LOGIN_REQUEST');
export const loginUserSuccess = createAction('USER_LOGIN_SUCCESS');
export const loginUserFailure = createAction('USER_LOGIN_FAILURE');

export const logoutUser = createAction('LOGOUT_USER');

export const getRoomsRequest = createAction('ROOMS_GET_REQUEST');
export const getRoomsSuccess = createAction('ROOMS_GET_SUCCESS');
export const getRoomsFailure = createAction('ROOMS_GET_FAILURE');

export const createRoomRequest = createAction('ROOM_CREATION_REQUEST');
export const createRoomSuccess = createAction('ROOM_CREATION_SUCCESS');
export const createRoomFailure = createAction('ROOM_CREATION_FAILURE');

export const updateRoomRequest = createAction('ROOM_UPDATE_REQUEST');
export const updateRoomSuccess = createAction('ROOM_UPDATE_SUCCESS');
export const updateRoomFailure = createAction('ROOM_UPDATE_FAILURE');

export const deleteRoomRequest = createAction('ROOM_DELETE_REQUEST');
export const deleteRoomSuccess = createAction('ROOM_DELETE_SUCCESS');
export const deleteRoomFailure = createAction('ROOM_DELETE_FAILURE');

export const openEditionDialog = createAction('OPEN_EDITION_DIALOG');
export const closeEditionDialog = createAction('CLOSE_EDITION_DIALOG');

export const registerUser = user => dispatch => {
  dispatch(registerUserRequest());
  axios
    .post('http://localhost:3000/user/register', user)
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

export const loginUser = user => dispatch => {
  dispatch(loginUserRequest());
  axios
    .post('http://localhost:3000/user/login', user)
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.user.token);
      localStorage.setItem('isLoggedIn', true);
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

export const getRooms = token => dispatch => {
  dispatch(getRoomsRequest());
  axios
    .get('http://localhost:3000/rooms', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(data => {
      dispatch(getRoomsSuccess({ rooms: data.rooms }));
    })
    .catch(error => {
      console.log(error);
      dispatch(getRoomsFailure());
    });
};

export const createRoom = (room, token) => dispatch => {
  dispatch(createRoomRequest());
  axios
    .post('http://localhost:3000/rooms', room, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(data => {
      // dispatch(registerUserSuccess({ user: data.user, token: data.token }));
    })
    .catch(error => {
      console.log(error);
      dispatch(registerUserFailure());
    });
};

export const updateRoom = (title, roomId, token) => dispatch => {
  dispatch(updateRoomRequest());
  axios
    .put(
      'http://localhost:3000/rooms',
      {
        title,
        roomId
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(data => {
      // dispatch(registerUserSuccess({ user: data.user, token: data.token }));
    })
    .catch(error => {
      console.log(error);
      dispatch(updateRoomFailure());
    });
};

export const deleteRoom = (roomId, token) => dispatch => {
  dispatch(deleteRoomRequest());
  axios
    .delete(`http://localhost:3000/rooms/${roomId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
      console.log(response);
      return response.data;
    })
    .then(data => {
      dispatch(deleteRoomSuccess({ deletedRoomId: data.room.id }));
    })
    .catch(error => {
      console.log(error);
      dispatch(deleteRoomFailure());
    });
};
