import React from 'react';
// styles
import styles from './LastMessage.module.css';

const LastMessage = ({ date }) =>
  console.log(date) || (
    <div className={styles.last}>
      {date._i && <p>Last Message: {date._i} </p>}
    </div>
  );

export default LastMessage;
