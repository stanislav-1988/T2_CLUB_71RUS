import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import myStore from '../../store/myStore';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu: FC = observer(() => {
  const { openMenu, setOpenMenu } = myStore;

  return (
    <div className={styles.menu}>
      <input checked={openMenu} type="checkbox" id="burger-checkbox" className={styles.burgerCheckbox} />
      <label onClick={() => setOpenMenu(!openMenu)} htmlFor="burger-checkbox" className={styles.burger} />
      <ul className={styles.menuList}>
        <li><button type="button" className={styles.menuItem}>Личный кабинет</button></li>
        <li><button type="button" className={styles.menuItem}>Фото встреч</button></li>
        <li><button type="button" className={styles.menuItem}>Видео</button></li>
        <li><button type="button" className={styles.menuItem}>Наш мерч</button></li>
        <li><button type="button" className={styles.menuItem}>Полезные ссылки</button></li>
        <li><button type="button" className={styles.menuItem}>Контакты</button></li>
      </ul>
    </div>
  );
});
