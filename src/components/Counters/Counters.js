import React from 'react';
// styles
import styles from './Counters.module.css';

const Counters = ({ messages, users }) => (
  <div className={styles.counters}>
    <div className={styles.data}>
      {users > 0 && (
        <p>
          {users}
          <span> users </span>
        </p>
      )}
    </div>
    <div>
      {messages > 0 && (
        <p>
          {messages}
          <span> messages</span>
        </p>
      )}
    </div>
  </div>
);

export default Counters;
