import React from 'react';
import { ReactComponent as Like } from '../../assets/heart.svg';

import styles from './LikeIcon.module.css';

const LikeIcon = () => (
  <>
    <button type="submit" className={styles.like}>
      <Like />
    </button>
  </>
);

export default LikeIcon;
