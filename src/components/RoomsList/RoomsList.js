import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Link } from 'react-router-dom';

const RoomsList = props => {
  const openEdition = room => () => {
    props.openEditionDialog({ room });
  };

  const handleRoomDeletion = roomId => () => {
    const token = localStorage.getItem('token');
    props.deleteRoom(roomId, token);
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
            onClick={openEdition(room)}
            href="#!"
            className="secondary-content"
          >
            <i className="material-icons">edit</i>
          </a>
          <Link to={`/rooms/${room.id}/chat`} className="secondary-content">
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
  deleteRoom: actions.deleteRoom
};

export default connect(null, mapActionsToProps)(RoomsList);
