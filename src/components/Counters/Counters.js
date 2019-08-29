import React from 'react';
// styles
import styles from './Counters.module.css';

const Counters = ({ messsages, users }) => (
  <div className={styles.counters}>
    {messsages > 0 && (
      <p>
        {messsages}
        <span>messsages</span>
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
