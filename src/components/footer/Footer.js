import React from 'react';
import navItems from '../../configs/main-nav';
// components
import Nav from './nav/Nav';
// styles
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.footer}>
    <Nav className={styles.nav} items={navItems} />
    <div className={styles.text}>@ Copyright 2019</div>
  </div>
);

export default Footer;
