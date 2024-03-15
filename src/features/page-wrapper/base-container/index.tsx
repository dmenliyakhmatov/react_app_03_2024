import { ReactNode } from 'react';
import style from './container.module.css';

export const BaseContainer = ({ children }: { children: ReactNode }) => {
  return <div className={style.baseContainer}>{children}</div>;
};
