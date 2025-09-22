/* eslint-disable jsx-a11y/control-has-associated-label */
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import myStore from '../../store/myStore';
import styles from './header.module.scss';

export const Header: FC = observer(() => {
  const { headerTitle } = myStore;

  return (
    <div className={styles.headerContainer}>
      <input checked type="checkbox" id="burger-checkbox" className={styles.burgerCheckbox} />
      <label htmlFor="burger-checkbox" className={styles.burger} />
      <div className={styles.header}>
        <h1>{headerTitle}</h1>
        <div className={styles.rain} />
      </div>
    </div>
  );
});
