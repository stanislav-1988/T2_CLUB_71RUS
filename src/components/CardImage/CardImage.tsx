import { observer } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';

import { HeaderTitle } from '../../assets/constants';
import myStore from '../../store/myStore';
import { LabelCardImage } from '../LabelCardImage';
import styles from './CardImage.module.scss';

interface CardImageProp {
  img: any;
  text: string
  maxHeight?: boolean
}

export const CardImage: FC<CardImageProp> = observer(({ img, text, maxHeight }) => {
  const { setHeaderTitle } = myStore;
  useEffect(() => {
    setHeaderTitle(HeaderTitle.contacts);
  }, [setHeaderTitle]);

  return (
    <div className={styles.container}>
      <LabelCardImage text={text} />
      <div className={styles.img} style={maxHeight ? { height: '350px' } : undefined}>
        <img src={img} alt="Hello" />
      </div>
    </div>
  );
});
