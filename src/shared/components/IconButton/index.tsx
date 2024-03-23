import { MouseEvent, ReactNode } from 'react';
import styles from './iconButton.module.css';

type IconButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

// const a = true;
// const b = false;
// const c = 0;

// const d = 'dsfs';

// const conditions = a && c && b;
// console.log(conditions);

// if(a && b && c && d)

export const IconButton = (props: IconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={props.onClick}>
      {props.icon && <span className={styles.icon}>{props.icon}</span>}
      {props.children}
    </button>
  );
};
