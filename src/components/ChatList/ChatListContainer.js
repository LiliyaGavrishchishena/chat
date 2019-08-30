import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messagesOperations, messagesSelectors } from '../../redux/messages';
import { likesActions } from '../../redux/likes';
// components
import Spinner from '../Spinner/Spinner';

class ChatListContainer extends Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{!isLoading ? <Spinner /> : <div>List</div>}</div>; // исправить!
  }
}

const mapStateToProps = state => ({
  messages: messagesSelectors.getAllMessages(state),
});

const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
  addLike: likesActions.addLike,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatListContainer);
