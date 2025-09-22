import React, { FC } from 'react';

import styles from './LabelCardImage.module.scss';

interface InputLabelProps {
  text: string;
}

export const LabelCardImage: FC<InputLabelProps> = ({ text }) => <span className={styles.label}>{text}</span>;
