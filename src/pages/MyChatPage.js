import React from 'react';
// componets
import ChatList from '../components/ChatList/ChatList';
import MessageInput from '../components/MessageInput/MessageInput';
// styles
import styles from './MyChatPage.module.css';

const MyChatPage = () => (
  <section className={styles.container}>
    <div className={styles.input}>
      <MessageInput />
    </div>
    <div className={styles.list}>
      <ChatList />
    </div>
  </section>
);

export default MyChatPage;
