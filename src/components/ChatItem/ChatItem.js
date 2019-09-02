/*eslint-disable */
import React from 'react';
import styles from './ChatItem.module.css';
import noAva from '../../assets/no-avatar.png';
//svg
import { ReactComponent as LikeIcon } from '../../assets/heart.svg';
import { ReactComponent as EditIcon } from '../../assets/login.svg';
import { ReactComponent as DeleteIcon } from '../../assets//delete.svg';

const ChatItem = ({
  messages: { id, avatar, created_at, user, message },
  addLike,
  userName,
  openModal,
  handleDeleteNote,
}) => (
  <div className={userName !== user ? styles.item : styles.itemUser}>
    <img
      className={styles.img}
      src={avatar || noAva}
      alt={user}
      width="80px"
      height="80px"
    />
    <div className={styles.content}>
      <p className={styles.created}>{created_at}</p>
      <h2 className={styles.title}>{user}</h2>
      <p className={userName !== user ? styles.message : styles.userMessage}>
        {message}
      </p>
      {userName !== user ? (
        <button
          className={styles.button}
          onClick={() => addLike(id)}
          type="button"
        >
          <LikeIcon />
        </button>
      ) : (
        <div className={styles.btn}>
          <button
            className={styles.edit}
            onClick={() => openModal(id)}
            type="button"
          >
            <EditIcon />
          </button>
          <button
            className={styles.edit}
            onClick={() => handleDeleteNote(id)}
            type="button"
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  </div>
);

export default ChatItem;
