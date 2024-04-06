import { ChangeEvent } from 'react';
import { LoginButton } from './LoginButton';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export const Header = ({ onSearchChange }: { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftSection}>
        <button className={styles.burgerButton}>{/* Иконка бургер-меню */}☰</button>
        <div className={styles.logo}>Your Logo</div>
      </div>
      <div className={styles.centerSection}>
        <input type="text" placeholder="Search" className={styles.searchInput} onChange={onSearchChange} />
        <button className={styles.newPostButton}>Новый пост</button>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.iconMessage}>📧</div>
        <div className={styles.iconNotification}>🔔</div>

        <LoginButton />
      </div>
    </header>
  );
};
