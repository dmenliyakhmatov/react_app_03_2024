import classes from 'classnames';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { LanguageContext } from '../../context/i18n';
import styles from './left-menu.module.css';

export const Sidebar = () => {
  const i18nData = useContext(LanguageContext);

  console.log('sidebar render');

  if (!i18nData) return null;

  const { lacales } = i18nData;

  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink to={ROUTES.ROOT} className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}>
          <span className={styles.icon}>🔥</span>
          <span>{lacales.popular}</span>
        </NavLink>
        <NavLink
          to={ROUTES.FRESH}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🆕</span>
          <span>{lacales.fresh}</span>
        </NavLink>
        <a className={styles.menuItem}>
          <span className={styles.icon}>💼</span>
          <span>{lacales.vacancies}</span>
        </a>

        <div className={styles.menuItem}>
          <span className={styles.icon}>🏆</span>
          <a>{lacales.rate}</a>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.icon}>📬</span>
          <a>{lacales.subsctiptions}</a>
        </div>
        <hr />
        <NavLink
          to={ROUTES.TIMER}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>Timer</span>
        </NavLink>
        <NavLink
          to={ROUTES.RESIZE}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>Resize</span>
        </NavLink>

        <NavLink
          to={ROUTES.REF_EXAMPLE}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>Ref</span>
        </NavLink>
        <NavLink
          to={ROUTES.MEMO_EXAMPLE}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>Memo</span>
        </NavLink>

        <NavLink
          to={ROUTES.KEY_PROP}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>💼</span>
          <span>Key</span>
        </NavLink>
      </div>
    </nav>
  );
};
