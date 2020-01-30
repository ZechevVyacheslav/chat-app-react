import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';

const RoomsList = props => {
  const openEdition = room => (event) => {
    event.preventDefault();
    props.openEditionDialog({ room });
  };

  const handleRoomDeletion = roomId => (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    props.deleteRoom(roomId, token);
  };

  const handleRoomDuplication = roomId => (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    props.duplicateRoom(roomId, token)
  }

  const handleRoomOpening = roomId => (event) => {
    props.openChat({ chatId: roomId });
    localStorage.setItem('chatId', roomId);
  };

  const sortedRoomsList = props.rooms.sort((a, b) => {
    return b.id - a.id;
  });

  const roomsTitles = sortedRoomsList.map(room => {
    return (
      <li key={room.id} className="collection-item">
        <div className="rooms-list__room">
          {room.title}
          <a
            onClick={handleRoomDeletion(room.id)}
            href="#!"
            className="secondary-content"
          >
            <i className="material-icons">delete</i>
          </a>
          <a
            onClick={handleRoomDuplication(room.id)}
            href="#!"
            className="secondary-content"
          >
            <i className="material-icons">content_copy</i>
          </a>
          <a
            onClick={openEdition(room)}
            href="#!"
            className="secondary-content"
          >
            <i className="material-icons">edit</i>
          </a>
          <Link
            to={`/rooms/${room.id}/chat`}
            onClick={handleRoomOpening(room.id)}
            className="secondary-content"
          >
            <i className="material-icons">visibility</i>
          </Link>
        </div>
      </li>
    );
  });
  // console.log(props.rooms);
  return (
    <ul className="collection with-header">
      <li className="collection-header center-align">
        <h4>Комнаты</h4>
      </li>
      {roomsTitles}
    </ul>
  );
};

// const mapStateToProps = state => {
//   const { rooms } = state.dialogs;
//   const props = {
//     loggedIn,
//     rooms
//   };
//   return props;
// };

const mapActionsToProps = {
  openEditionDialog: actions.openEditionDialog,
  openChat: actions.openChat,
  deleteRoom: actions.deleteRoom,
  duplicateRoom: actions.duplicateRoom
};

export default connect(null, mapActionsToProps)(RoomsList);
