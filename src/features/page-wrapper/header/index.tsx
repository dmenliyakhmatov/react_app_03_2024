import avatar from 'assets/images/avatar.jpg';
import { ChangeEvent } from 'react';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export type HeaderProps = { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void };

export const Header = ({ onSearchChange }: HeaderProps) => {
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
        {/* <div className={styles.avatar}>User Avatar</div> */}

        <img className={styles.avatar} src={avatar} alt="avatar" />

        <button className={styles.newPostButton}>Выйти</button>
      </div>
    </header>
  );
};
