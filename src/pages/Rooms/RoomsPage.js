import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import CreateRoomDialog from '../../components/Dialogs/CreateRoom/CreateRoomDialog';
import EditRoomDialog from '../../components/Dialogs/EditRoom/EditRoomDialog';
import RoomsList from '../../components/RoomsList/RoomsList';
import './RoomsPage.less';

class RoomsPage extends Component {
  state = {
    isCreateRoomDialogOpen: false,
    isEditRoomDialogOpen: false
  };

  handleCreationSubmit = room => {
    this.handleCreateRoomDialogClose();
    const { createRoom } = this.props;

    const token = localStorage.getItem('token');
    createRoom(room, token);
  };

  handleCreateRoomDialogOpen = () => {
    this.setState({ isCreateRoomDialogOpen: true });
  };

  handleCreateRoomDialogClose = () => {
    this.setState({ isCreateRoomDialogOpen: false });
  };

  handleEditRoomDialogOpen = () => {
    this.setState({ isEditRoomDialogOpen: true });
  };

  handleEditRoomDialogClose = () => {
    this.setState({ isEditRoomDialogOpen: false });
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
    const { getRooms } = this.props;
    const token = localStorage.getItem('token');
    getRooms(token);
  }

  render() {
    const { rooms, isEditionDialogOpen } = this.props;
    const editRoomDialog = isEditionDialogOpen ? <EditRoomDialog /> : null;
    return (
      <>
        <header>
          <Header />
        </header>
        <main className="page-content">
          <div className="page-content__rooms-list">
            <div className="create-room-section">
              <button
                className="waves-effect waves-light btn create-room-section__button"
                onClick={this.handleCreateRoomDialogOpen}
              >
                Создать новую комнату
                <i className="material-icons right">add_box</i>
              </button>
              <CreateRoomDialog
                onSubmit={this.handleCreationSubmit}
                isOpen={this.state.isCreateRoomDialogOpen}
                handleClose={this.handleCreateRoomDialogClose}
              />
              {editRoomDialog}
            </div>
            <RoomsList
              rooms={rooms || []}
              openEdition={this.handleEditRoomDialogOpen}
            />
          </div>
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const { rooms } = state.rooms;
  const { isEditionDialogOpen } = state.dialogs;
  const props = {
    loggedIn,
    rooms,
    isEditionDialogOpen,
  };
  return props;
};

const mapActionsToProps = {
  createRoom: actions.createRoom,
  getRooms: actions.getRooms
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(RoomsPage));
