import React from 'react';
import { connect } from 'react-redux';

import { messagesSelectors } from '../../redux/messages';

// components
import Logo from '../Logo/Logo';
import Counters from '../Counters/Counters';
import LastMessage from '../LastMessage/LastMessage';
// styles
import styles from './Header.module.css';

const Header = ({ usersCount, messagesCount, lastMessage }) => (
  <div className={styles.header}>
    <Logo className={styles.logo} />
    <Counters users={usersCount} messages={messagesCount} />
    <LastMessage date={lastMessage} />
  </div>
);

const mapStateToProps = state => ({
  usersCount: messagesSelectors.getUsersLength(state),
  messagesCount: messagesSelectors.getMessageLength(state),
  lastMessage: messagesSelectors.getLastMessage(state),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
