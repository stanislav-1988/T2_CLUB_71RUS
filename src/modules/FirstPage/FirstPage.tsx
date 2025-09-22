import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';

import { HeaderTitle } from '../../assets/constants';
import Jetour from '../../assets/icons/Jetour_t2.webp';
import myStore from '../../store/myStore';
import styles from './FirstPage.module.scss';

export const FirstPage: FC = observer(() => {
  const { setHeaderTitle } = myStore;
  useEffect(() => {
    setHeaderTitle(HeaderTitle.startPage);
  }, [setHeaderTitle]);

  return (
    <div className={styles.container}>
      <img src={Jetour} alt="Hello" />
    </div>
  );
});
