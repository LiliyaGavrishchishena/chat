import React from 'react';
// styles
import styles from './Counters.module.css';

const Counters = ({ messages, users }) => (
  <div className={styles.counters}>
    {messages > 0 && (
      <p>
        {messages}
        <span>messages</span>
      </p>
    )}
    {users > 0 && (
      <p>
        {users}
        <span>users</span>
      </p>
    )}
  </div>
);

export default Counters;
