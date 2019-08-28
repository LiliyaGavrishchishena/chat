import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './Nav.module.css';

const Nav = ({ items = [] }) => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      {items.map(({ name, path }) => (
        <li key={name} className={styles.link}>
          <NavLink
            exact
            to={path}
            activeClassName={styles.active}
            className={styles.link}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
