import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';
import { Article } from '../../../types/article';
import { StatsButtons } from '../ArticleStatsButtons/StatsButtons';
import s from './post.module.css';

type PostCardProps = {
  postData: Article;
};

export const PostCard = (props: PostCardProps) => {
  const { postData } = props;

  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{postData.section}</span>
          <div className={s.authorInfo}>
            <img src={postData.user.avatar} alt="avatar" className={s.avatar} />
            <span>{postData.user.fullName}</span>
          </div>
          <span>{postData.publication_date}</span>
        </div>
        <div className={s.headerRight}>
          <button className={s.moreOptionsButton}>Подписаться</button>
        </div>
      </div>
      <Link to={`${ROUTES.ARTICLE}/${postData.id}`}>
        <h2>{postData.title}</h2>
      </Link>

      <div className={s.coverImage}>
        <img src={postData.cover_image} alt="cover" />
      </div>

      <StatsButtons likes={postData.likes} />
    </div>
  );
};
