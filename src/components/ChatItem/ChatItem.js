/*eslint-disable */
import React from 'react';
import styles from './ChatItem.module.css';

const ChatItem = ({
  messages: { id, avatar, created_at, user, message },
  addLike,
}) => (
  <div className={styles.item}>
    <img
      className={styles.img}
      src={avatar}
      alt={user}
      width="77px"
      height="77px"
    />
    <div className={styles.content}>
      <p className={styles.created}>{created_at}</p>
      <h2 className={styles.title}>{user}</h2>
      <p className={styles.message}>{message}</p>

      <button
        className={styles.button}
        onClick={() => addLike(id)}
        type="button"
      >
        Like
      </button>
    </div>
    {/* <LikeIcon /> */}
  </div>
);

export default ChatItem;
