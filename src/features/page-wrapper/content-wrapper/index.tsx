import { ReactNode } from 'react';
import s from './content-wrapper.module.css';

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={s.root}>{children}</div>;
};
