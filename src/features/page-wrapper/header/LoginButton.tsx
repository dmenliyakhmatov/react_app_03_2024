import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { useAppDispatch } from '../../../store';
import { clearUserData, getToken, getUserAvatar } from '../../../store/userData';
import { STORAGE_KEYS, clearStorageItem } from '../../../utils/storage';
import styles from './header.module.css'; // Путь к вашему файлу стилей

export const LoginButton = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(getToken);
  const avatar = useSelector(getUserAvatar);

  const logoutHandler = () => {
    dispatch(clearUserData());
    clearStorageItem(STORAGE_KEYS.USER_DATA);
  };

  if (token)
    return (
      <>
        {avatar && <img className={styles.avatar} src={avatar} alt="avatar" />}

        <button className={styles.newPostButton} onClick={logoutHandler}>
          Выйти
        </button>
      </>
    );

  return (
    <Link to={ROUTES.AUTH} className={styles.newPostButton}>
      Войти
    </Link>
  );
};
