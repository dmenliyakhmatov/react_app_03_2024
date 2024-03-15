import { MouseEvent, ReactNode } from 'react';
import styles from './iconButton.module.css';

type IconButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton = () => {
  return <button className={styles.iconButton}></button>;
};
