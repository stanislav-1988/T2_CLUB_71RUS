/* eslint-disable jsx-a11y/control-has-associated-label */
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import styles from './header.module.scss';

export const Header: FC = observer(() => (
  <div className={styles.headerContainer}>
    <div className={styles.header}>
      <h1>T2 CLUB 71RUS</h1>
      <div className={styles.rain} />
    </div>
    <button type="button" className={styles.burger} />
  </div>
));
