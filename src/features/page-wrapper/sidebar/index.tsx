import classes from 'classnames';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import styles from './left-menu.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <NavLink to={ROUTES.ROOT} className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}>
          <span className={styles.icon}>🔥</span>
          <span>Популярное</span>
        </NavLink>
        <NavLink
          to={ROUTES.FRESH}
          className={({ isActive }) => classes(styles.menuItem, { [styles.active]: isActive })}
        >
          <span className={styles.icon}>🆕</span>
          <span>Свежее</span>
        </NavLink>
        <a className={styles.menuItem}>
          <span className={styles.icon}>💼</span>
          <span>Вакансии</span>
        </a>

        <div className={styles.menuItem}>
          <span className={styles.icon}>🏆</span>
          <a>Рейтинг</a>
        </div>
        <div className={styles.menuItem}>
          <span className={styles.icon}>📬</span>
          <a>Подписки</a>
        </div>
      </div>
    </nav>
  );
};
