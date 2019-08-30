import React from 'react';
// componets
import ChatListContainer from '../components/ChatList/ChatListContainer';
import MessageInput from '../components/MessageInput/MessageInput';
// styles
import styles from './MyChatPage.module.css';

const MyChatPage = () => (
  <section className={styles.container}>
    <div className={styles.list}>
      <ChatListContainer />
    </div>
    <div className={styles.input}>
      <MessageInput />
    </div>
  </section>
);

export default MyChatPage;
