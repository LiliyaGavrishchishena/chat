import React from 'react';
import { connect } from 'react-redux';

import { messagesSelectors } from '../../redux/messages';

// components
import Logo from '../Logo/Logo';
import Counters from '../Counters/Counters';
import LastMessage from '../LastMessage/LastMessage';
// styles
import styles from './Header.module.css';

const Header = (users, messages) => (
  <div className={styles.header}>
    <Logo className={styles.logo} />
    <Counters users={users} messages={messages} />
    <LastMessage />
  </div>
);

const mapStateToProps = state => ({
  users: messagesSelectors.getUniqueUsers(state),
  messages: messagesSelectors.getLastMessage(state),
});

export default connect(
  mapStateToProps,
  null,
)(Header);
