import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../providers';
import myStore from '../../store/myStore';
import styles from './BurgerMenu.module.scss';

export const BurgerMenu: FC = observer(() => {
  const { openMenu, setOpenMenu } = myStore;
  const navigate = useNavigate();
  const portal = document.getElementById('portal');

  const handleNavigate = (route: string) => {
    setTimeout(() => {
      setOpenMenu(false);
      navigate(route);
    }, 1000);
  };

  return portal && ReactDOM.createPortal(
    <div className={styles.menu}>
      <input checked={openMenu} type="checkbox" id="burger-checkbox" className={styles.burgerCheckbox} />
      <label onClick={() => setOpenMenu(!openMenu)} htmlFor="burger-checkbox" className={styles.burger} />
      <ul className={styles.menuList}>
        <li>
          <button
            onClick={() => handleNavigate(ROUTES.AUTHORIZATION_ROUTE)}
            type="button"
            className={styles.menuItem}
          >
            Личный кабинет
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate('')}
            type="button"
            className={styles.menuItem}
          >
            Фото встреч
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate('')}
            type="button"
            className={styles.menuItem}
          >
            Видео
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate('')}
            type="button"
            className={styles.menuItem}
          >
            Наш мерч
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate('')}
            type="button"
            className={styles.menuItem}
          >
            Полезные ссылки
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavigate('')}
            type="button"
            className={styles.menuItem}
          >
            Контакты
          </button>
        </li>
      </ul>
    </div>,
    portal,
  );
});
