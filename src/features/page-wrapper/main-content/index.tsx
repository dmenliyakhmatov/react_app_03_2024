import { ReactNode } from 'react';
import s from './main-content.module.css';

export const MainContent = ({ children }: { children: ReactNode }) => {
  return <div className={s.root}>{children}</div>;
};
