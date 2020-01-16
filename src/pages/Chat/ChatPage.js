import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';

import TabPanel from '../../components/Tabs/TabPanel/TabPanel';
import LinkTab from '../../components/Tabs/LinkTab/LinkTab';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Header from '../../components/Header/Header';
import MessageSection from '../../components/Message/MessageSection/MessageSection';
import EditMessageDialog from '../../components/Dialogs/EditMessage/EditMessageDialog';
import './ChatPage.less';

class ChatPage extends Component {
  state = {
    tabNumber: 0
  };

  a11yProps = index => {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`
    };
  };

  handleTabSwitch = (event, number) => {
    this.setState({ tabNumber: number });
  };

  componentDidMount() {
    if (!this.props.loggedIn) {
      this.props.history.push('/');
    }
    const { getRoomMessages, chatId } = this.props;
    const token = localStorage.getItem('token');
    getRoomMessages(chatId, token);
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main className="page-content">
          <div className="chat">
            <div className="chat__header-section">
              {/* <h3>Чатик</h3>
              <button
                className="waves-effect waves-light btn"
                onClick={this.handleCreateRoomDialogOpen}
              >
                Пригласить пользователей
                <i className="material-icons right">person_add</i>
              </button> */}
              <AppBar position="static">
                <Tabs
                  variant="fullWidth"
                  value={this.state.tabNumber}
                  onChange={this.handleTabSwitch}
                  aria-label="nav tabs example"
                >
                  <LinkTab
                    label="Сообщения"
                    href="/messages"
                    {...this.a11yProps(0)}
                  />
                  <LinkTab
                    label="Файлы"
                    href="/files"
                    {...this.a11yProps(1)}
                  />
                  <LinkTab
                    label="Участники"
                    href="/members"
                    {...this.a11yProps(2)}
                  />
                </Tabs>
              </AppBar>
            </div>
            <div className="chat__content-section">
              {/* <MessageSection /> */}
              <TabPanel value={this.state.tabNumber} index={0}>
                <MessageSection />
              </TabPanel>
              <TabPanel value={this.state.tabNumber} index={1}>
                Page Two
              </TabPanel>
              <TabPanel value={this.state.tabNumber} index={2}>
                Page Three
              </TabPanel>
            </div>
          </div>
          <EditMessageDialog />
        </main>
      </>
    );
  }
}

const mapStateToProps = state => {
  const loggedIn = localStorage.getItem('isLoggedIn') || false;
  const chatId = state.chat.chatId || localStorage.getItem('chatId');
  const chatData = state.chat.chatData;
  const props = {
    loggedIn,
    chatId,
    chatData
  };
  return props;
};

const mapActionsToProps = {
  getRoomMessages: actions.getRoomMessages
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(ChatPage));
