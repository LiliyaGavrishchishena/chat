import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messagesOperations, messagesSelectors } from '../../redux/messages';
// components
// import ChatItemView from './chatItem/ChatItemView';

class ChatList extends Component {
  state = {};

  componentDidMount() {
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  render() {
    return <div>List</div>;
  }
}

const mapStateToProps = state => ({
  messages: messagesSelectors.getAllMessages(state),
});

const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);
