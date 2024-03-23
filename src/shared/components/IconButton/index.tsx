import { MouseEvent, ReactNode } from 'react';
import styles from './iconButton.module.css';

type IconButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton = (props: IconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={props.onClick}>
      {props.icon && <span className={styles.icon}>{props.icon}</span>}
      {props.children}
    </button>
  );
};
