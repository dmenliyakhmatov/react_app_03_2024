import styles from './left-menu.module.css';

export const Sidebar = () => {
  return (
    <nav className={styles.leftMenu}>
      <div>
        <a className={styles.menuItem}>
          <span className={styles.icon}>🔥</span>
          <span>Популярное</span>
        </a>
        <a className={styles.menuItem}>
          <span className={styles.icon}>🆕</span>
          <span>Свежее</span>
        </a>
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
