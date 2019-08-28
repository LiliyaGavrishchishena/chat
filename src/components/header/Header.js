import React from 'react';
// components
import Logo from './logo/Logo';
// styles
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header}>
    <Logo className={styles.logo} />
  </div>
);

export default Header;
