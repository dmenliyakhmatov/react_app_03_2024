import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { getIsLoading, getToken, setIsLoading, setUserData } from '../../../store/userData';
import styles from './loginForm.module.css';

type AuthResponse = {
  data: {
    id: number;
    fullName: string;
    avatar: string;
    email: string;
  };
  token: string;
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(getToken);

  const [formState, setFormState] = useState({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setIsLoading(true));

    fetch(`https://68f241df693169c2.mokky.dev/auth`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    })
      .then(res => {
        if (!res.ok) throw res;

        return res.json();
      })
      .then(({ data, token }: AuthResponse) => {
        const userPayload = { ...data, token };

        dispatch(setUserData(userPayload));
      })
      .catch(console.error)
      .finally(() => dispatch(setIsLoading(false)));
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
