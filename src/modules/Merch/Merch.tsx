/* eslint-disable react/no-array-index-key */
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { HeaderTitle, merchData } from '../../assets/constants';
import frame from '../../assets/icons/frame.webp';
import frameName from '../../assets/icons/frameName.webp';
import logo from '../../assets/icons/logo.webp';
import logoGologramm from '../../assets/icons/logoGologramm.webp';
import { CardImage, LabelCardImage } from '../../components';
import myStore from '../../store/myStore';
import styles from './Merch.module.scss';

export const Merch = observer(() => {
  const { setHeaderTitle } = myStore;
  useEffect(() => {
    setHeaderTitle(HeaderTitle.merch);
  }, [setHeaderTitle]);
  const item = merchData.getMerchText.map((el, i) => <LabelCardImage key={i} text={el} />);

  return (
    <div className={styles.container}>
      {item}
      <CardImage maxHeight text={merchData.logo} img={logo} />
      <CardImage text={merchData.logoGologramm} img={logoGologramm} />
      <CardImage text={merchData.frame} img={frame} />
      <CardImage text={merchData.frameName} img={frameName} />
    </div>
  );
});
