import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { getToken, getUserAvatar } from '../../../store/userData';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export const LoginButton = () => {
  const token = useSelector(getToken);
  const avatar = useSelector(getUserAvatar);

  if (token)
    return (
      <>
        {avatar && <img className={styles.avatar} src={avatar} alt="avatar" />}

        <button className={styles.newPostButton}>Выйти</button>
      </>
    );

  return (
    <Link to={ROUTES.AUTH} className={styles.newPostButton}>
      Войти
    </Link>
  );
};
