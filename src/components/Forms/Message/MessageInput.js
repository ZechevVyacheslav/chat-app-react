import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { TextField } from '@material-ui/core';

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => <TextField label={label} {...input} {...custom} />;

const MessageInput = props => {
  const clearFormAfterSubmit = values => {
    values.preventDefault();
    const { sendRoomMessage, chatId } = props;
    const token = localStorage.getItem('token');
    sendRoomMessage(chatId, props.text, token);
    props.reset();
  };

  return (
    <form autoComplete="off" onSubmit={clearFormAfterSubmit}>
      <Field
        name="text"
        id="outlined-basic"
        component={renderTextField}
        label="Начните писать"
      />
    </form>
  );
};

const selector = formValueSelector('messageInput');

const mapStateToProps = state => {
  const text = selector(state, 'text');
  const { chatId } = state.chat;
  const props = {
    text,
    chatId
  };
  return props;
};

const mapActionsToProps = {
  sendRoomMessage: actions.sendRoomMessage
};

const form = reduxForm({ form: 'messageInput' })(MessageInput);
export default connect(mapStateToProps, mapActionsToProps)(form);
