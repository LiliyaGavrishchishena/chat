import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
// styles
import styles from './Logo.module.css';

const Logo = () => (
  <Link className={styles.logo} to={routes.MAIN}>
    My Chat
  </Link>
);

export default Logo;
