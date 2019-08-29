import React from 'react';
// styles
import styles from './MessageInput.module.css';

const MessageInput = ({ text, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className={styles.form}>
    <input
      className={styles.input}
      type="text"
      name="text"
      placeholder="Type something..."
      value={text}
      onChange={onChange}
    />
    <button className={styles.button} type="submit">
      Send
    </button>
  </form>
);

export default MessageInput;
