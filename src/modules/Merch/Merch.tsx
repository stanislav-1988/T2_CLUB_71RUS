import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { HeaderTitle } from '../../assets/constants';
import myStore from '../../store/myStore';
import styles from './Merch.module.scss';

export const Merch = observer(() => {
  const { setHeaderTitle } = myStore;
  useEffect(() => {
    setHeaderTitle(HeaderTitle.merch);
  }, []);

  return (
    <div className={styles.container}>
      lgjd
    </div>
  );
});
