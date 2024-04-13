import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAppDispatch } from '../../../store';
import { getIsLoading, getToken } from '../../../store/userData';
import { postAuthData } from '../../../store/userData/effects';
import { AuthFormData } from '../../../store/userData/types';
import styles from './loginForm.module.css';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(getToken);

  const [formState, setFormState] = useState<AuthFormData>({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(postAuthData(formState));
  };

  if (token) return <Navigate to={ROUTES.ROOT} />;

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>Авторизация</h2>
      <form className={styles.loginForm} onSubmit={handeSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Имя пользователя:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formState.email}
            onChange={onChange}
            required
            autoComplete="off"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formState.password}
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Обработка данных...' : 'Войти'}
        </button>
      </form>
    </div>
  );
};
