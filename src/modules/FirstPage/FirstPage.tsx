import React, { FC } from 'react';

import Jetour from '../../assets/icons/Jetour_t2.webp';
import styles from './FirstPage.module.scss';

export const FirstPage: FC = () => (
  <div className={styles.container}>
    <img src={Jetour} alt="Hello" />
  </div>
);
