/*eslint-disable */
import React from 'react';
import { ReactComponent as Alt } from '../../assets/no-avatar.png';
//components
import LikeIcon from '../LikeIcon/LikeIcon';
// styles
import styles from './ChatItemView.module.css';

const ChatItemView = ({
  messages: { id, user, avatar, created_at, message },
  addLike,
}) => (
  <div className={styles.item}>
    <img
      className={styles.img}
      src={avatar}
      alt={<Alt />}
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
    <LikeIcon />
  </div>
);

export default ChatItemView;
