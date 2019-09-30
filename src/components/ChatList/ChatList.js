import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScrollableFeed from 'react-scrollable-feed';

import {
  messagesOperations,
  messagesSelectors,
  messagesActions,
} from '../../redux/messages';
import { authSelectors } from '../../redux/auth';
import { likesActions } from '../../redux/likes';
import { modalActions } from '../../redux/modal';

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

  handleDeleteNote = id => {
    const { deleteMessage } = this.props;

    deleteMessage(id);
  };

  render() {
    const { messages = [], addLike, editMessage, user, openModal } = this.props;
    const { isLoading } = this.state;

    return (
      <div>
        <ScrollableFeed>
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
                      openModal={openModal}
                      handleDeleteNote={this.handleDeleteNote}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </ScrollableFeed>
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
  deleteMessage: messagesActions.deleteMessage,
  addLike: likesActions.addLike,
  openModal: modalActions.openModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatList);
