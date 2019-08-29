import React from 'react';
import { ReactComponent as Login } from '../../assets/login.svg';

import styles from './LoginIcon.module.css';

const LoginIcon = () => (
  <>
    <button type="submit" className={styles.signIn}>
      <Login />
    </button>
  </>
);

export default LoginIcon;
