import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Authorization, Contacts, FirstPage, Header, Loader, Merch, Registration,
} from '../modules';
import { BurgerMenu } from '../modules/BurgerMenu';
import { ROUTES } from '../providers';
import loonaStore from '../store/myStore';
import styles from './App.module.scss';

export const App: FC = observer(() => {
  const { isLoading } = loonaStore;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.body}>
      <Header />
      <BurgerMenu />
      <Routes>
        <Route path={ROUTES.ROOT_ROUTE} element={<FirstPage />} />
        <Route path={ROUTES.AUTHORIZATION_ROUTE} element={<Authorization />} />
        <Route path={ROUTES.REGISTRATION_ROUTE} element={<Registration />} />
        <Route path={ROUTES.MERCH} element={<Merch />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path="*" element={<FirstPage />} />
      </Routes>
    </div>
  );
});
