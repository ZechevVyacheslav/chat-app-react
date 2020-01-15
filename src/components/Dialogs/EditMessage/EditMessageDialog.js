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

import './EditMessageDialog.less';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField autoFocus label={label} {...input} {...custom} />;

const EditMessageDialog = props => {
  const {
    messageToEdit,
    isMessageEditionDialogOpen,
    closeMessageEditionDialog
  } = props;

  const clearFormAfterSubmit = values => {
    const { updateRoomMessage, chatId, text } = props;
    const token = localStorage.getItem('token');

    values.preventDefault();
    updateRoomMessage(chatId, messageToEdit.id, text, token);
    closeMessageEditionDialog();
    props.reset();
  };

  const clearFormAfterClose = () => {
    closeMessageEditionDialog();
    props.reset();
  };

  return (
    <Dialog
      open={isMessageEditionDialogOpen}
      onClose={closeMessageEditionDialog}
      aria-labelledby="form-dialog-title"
    >
      <form autoComplete="off" onSubmit={clearFormAfterSubmit}>
        <DialogTitle id="form-dialog-title">
          Редактирование сообщения
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Отредактируйте текст сообщения</DialogContentText>
          <Field
            name="text"
            component={renderTextField}
            label="Введите текст"
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

const selector = formValueSelector('editMessage');

const mapStateToProps = state => {
  const { messageToEdit, isMessageEditionDialogOpen } = state.dialogs;
  const { chatId } = state.chat;
  const text = selector(state, 'text');
  const initialText = messageToEdit.text;
  const props = {
    chatId,
    messageToEdit,
    isMessageEditionDialogOpen,
    text,
    initialValues: { text: initialText }
  };
  return props;
};

const mapActionsToProps = {
  closeMessageEditionDialog: actions.closeMessageEditionDialog,
  updateRoomMessage: actions.updateRoomMessage
};

const form = reduxForm({ form: 'editMessage', enableReinitialize: true })(
  EditMessageDialog
);
export default connect(mapStateToProps, mapActionsToProps)(form);
