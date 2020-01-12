import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button
} from '@material-ui/core';

import './CreateRoomDialog.less';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField autoFocus label={label} {...input} {...custom} />;

const CreateRoomDialog = props => {
  const { isOpen, handleClose, handleSubmit } = props;

  const clearFormAfterSubmit = values => {
    console.log(values);
    handleSubmit(values);
    props.reset();
  };

  const clearFormAfterClose = () => {
    handleClose();
    props.reset();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={clearFormAfterSubmit}>
        <DialogTitle id="form-dialog-title">Создание комнаты</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Выберете название для новой комнаты
          </DialogContentText>
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
            Создать
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default reduxForm({ form: 'createRoom' })(CreateRoomDialog);
