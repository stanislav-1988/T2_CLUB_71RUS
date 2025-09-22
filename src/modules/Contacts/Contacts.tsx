import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';

import { HeaderTitle } from '../../assets/constants';
import myStore from '../../store/myStore';
import styles from './Contacts.module.scss';

export const Contacts: FC = observer(() => {
  const { setHeaderTitle } = myStore;
  useEffect(() => {
    setHeaderTitle(HeaderTitle.contacts);
  }, [setHeaderTitle]);

  return (
    <div className={styles.container}>
      jdfgk
    </div>
  );
});
