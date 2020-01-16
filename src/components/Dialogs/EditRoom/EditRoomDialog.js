import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button
} from '@material-ui/core';

import './EditRoomDialog.less';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField autoFocus label={label} {...input} {...custom} />;

const EditRoomDialog = props => {
  const { roomToEdit, isEditionDialogOpen, closeEditionDialog } = props;

  const clearFormAfterSubmit = values => {
    values.preventDefault();
    const { updateRoom, title } = props;
    const token = localStorage.getItem('token');

    updateRoom(title, roomToEdit.id, token);
    closeEditionDialog();
    props.reset();
  };

  const clearFormAfterClose = () => {
    closeEditionDialog();
    props.reset();
  };

  return (
    <Dialog
      open={isEditionDialogOpen}
      onClose={closeEditionDialog}
      aria-labelledby="form-dialog-title"
    >
      <form autoComplete="off" onSubmit={clearFormAfterSubmit}>
        <DialogTitle id="form-dialog-title">Редактирование комнаты</DialogTitle>
        <DialogContent>
          <DialogContentText>Отредактируйте название комнаты</DialogContentText>
          <Field
            name="title"
            component={renderTextField}
            label="Введите название"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={clearFormAfterClose} color="primary">
            Отмена
          </Button>
          <Button type="submit" color="primary">
            Редактировать
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const selector = formValueSelector('editRoom');

const mapStateToProps = state => {
  const { roomToEdit, isEditionDialogOpen } = state.dialogs;
  const title = selector(state, 'title');
  const initialTitle = roomToEdit.title;
  const props = {
    roomToEdit,
    isEditionDialogOpen,
    title,
    initialValues: { title: initialTitle }
  };
  return props;
};

const mapActionsToProps = {
  closeEditionDialog: actions.closeEditionDialog,
  updateRoom: actions.updateRoom
};

const form = reduxForm({ form: 'editRoom', enableReinitialize: true })(
  EditRoomDialog
);
export default connect(mapStateToProps, mapActionsToProps)(form);
