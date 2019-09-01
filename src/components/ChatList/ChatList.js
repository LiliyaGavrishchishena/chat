import React, { Component } from 'react';
import { connect } from 'react-redux';

import { messagesOperations, messagesSelectors } from '../../redux/messages';
import { authSelectors } from '../../redux/auth';
import { likesActions } from '../../redux/likes';
// components
import Spinner from '../Spinner/Spinner';
import ChatItem from '../ChatItem/ChatItem';
// styles
import styles from './ChatList.module.css';

class ChatList extends Component {
  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    const { fetchMessages } = this.props;
    fetchMessages();
    this.setState({ isLoading: false });
  }

  render() {
    const { messages = [], addLike, editMessage, user } = this.props;
    const { isLoading } = this.state;

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <section>
            <ul className={styles.list}>
              {messages.map(message => (
                <li className={styles.item} key={message.id}>
                  <ChatItem
                    messages={message}
                    addLike={addLike}
                    editMessage={editMessage}
                    userName={user}
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: messagesSelectors.getAllMessages(state),
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {
  fetchMessages: messagesOperations.fetchMessages,
  addLike: likesActions.addLike,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);
