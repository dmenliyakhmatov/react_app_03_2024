import { ChangeEvent, useContext } from 'react';
import Select from 'react-select';
import { LANGUAGES } from '../../../shared/types/i18n';
import { LanguageContext } from '../../context/i18n';
import { LoginButton } from './LoginButton';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export const Header = ({ onSearchChange }: { onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  const i18nData = useContext(LanguageContext);

  if (!i18nData) return null;
  const { language, setLanguage } = i18nData;

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
        <Select
          options={[
            { value: LANGUAGES.EN, label: LANGUAGES.EN },
            { value: LANGUAGES.RU, label: LANGUAGES.RU },
          ]}
          value={{ label: language, value: language }}
          onChange={val => {
            if (val) {
              setLanguage(val.value);
            }
          }}
        />
        <div className={styles.iconMessage}>📧</div>
        <div className={styles.iconNotification}>🔔</div>

        <LoginButton />
      </div>
    </header>
  );
};
