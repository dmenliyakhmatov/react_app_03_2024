import avatar from 'assets/images/avatar.jpg';
import coverImg from 'assets/images/cover.webp';
import { Article } from '../../../types/article';
import { StatsButtons } from '../ArticleStatsButtons/StatsButtons';
import s from './post.module.css';

type PostCardProps = {
  postData: Article;
  // one: string;
  // two: string;
};

export const PostCard = (props: PostCardProps) => {
  const { postData } = props;

  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{postData.section}</span>
          <div className={s.authorInfo}>
            <img src={avatar} alt="avatar" className={s.avatar} />
            <span>{postData.authorName}</span>
          </div>
          <span>{postData.publicationDate}</span>
        </div>
        <div className={s.headerRight}>
          <button className={s.moreOptionsButton}>Подписаться</button>
        </div>
      </div>

      <h2>{postData.title}</h2>

      <div className={s.coverImage}>
        <img src={coverImg} alt="cover" />
      </div>

      <StatsButtons likes={postData.likes} />
    </div>
  );
};
