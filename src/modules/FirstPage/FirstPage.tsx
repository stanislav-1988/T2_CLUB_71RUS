import React, { FC } from 'react';

import PetIcon from '../../assets/icons/Jetour_t2.webp';
import styles from './FirstPage.module.scss';

export const FirstPage: FC = () => (
  <div className={styles.container}>
    <img src={PetIcon} alt="Hello" />
  </div>
);
