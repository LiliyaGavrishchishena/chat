import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';

import { messagesActions, messagesSelectors } from '../../redux/messages';
import { authSelectors } from '../../redux/auth';

// styles
import styles from './MessageInput.module.css';

const INITIAL_STATE = {
  message: '',
};
class MessageInput extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const { user, addMessage, usersAvatar } = this.props;
    const { message } = this.state;

    let avatar = null;
    const userAvatar = usersAvatar.find(userAv => userAv.user === user);

    if (userAvatar) {
      const av = userAvatar.avatar;
      avatar = av;
    }

    const obj = {
      id: new Date().getTime().toString(36),
      user,
      avatar,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      message,
    };

    addMessage(obj);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmitForm} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="message"
            placeholder="Type something..."
            value={message}
            onChange={this.handleChange}
          />
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  usersAvatar: messagesSelectors.getUsersAvatar(state),
});
const mapDispatchToProps = {
  addMessage: messagesActions.addMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInput);
