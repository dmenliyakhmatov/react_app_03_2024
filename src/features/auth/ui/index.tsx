import styles from './loginForm.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Авторизация</h2>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Имя пользователя:</label>
          <input type="text" id="email" name="email" required autoComplete="off" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
