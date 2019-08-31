import React, { Component } from 'react';
import { connect } from 'react-redux';

import { messagesOperations, messagesSelectors } from '../../redux/messages';
import { likesActions } from '../../redux/likes';
// components
import Spinner from '../Spinner/Spinner';
import ChatItem from '../ChatItem/ChatItem';

class ChatList extends Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { fetchMessages } = this.props;
    fetchMessages();
  }

  render() {
    const { messages = [], addLike } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        {!isLoading ? (
          <Spinner />
        ) : (
          <section>
            <ul>
              {messages.map(message => (
                <li key={message.id}>
                  <ChatItem messages={message} addLike={addLike} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    ); // исправить!
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
)(ChatList);
