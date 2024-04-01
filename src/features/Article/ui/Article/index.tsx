import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import type { Article as ArticleType } from '../../../../shared/types/article';
import styles from './post.module.css';

type ArticleProps = {
  article: ArticleType;
};

export const ArticleView = ({ article }: ArticleProps) => {
  return (
    <div className={styles.postCard}>
      <div className={styles.centeredContentWrapper}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span>{article.section}</span>
            <div className={styles.authorInfo}>
              <img src={article.user.avatar} alt={`${article.user.fullName}'s Avatar`} className={styles.avatar} />
              <span>{article.user.fullName}</span>
            </div>
            <span>{article.publication_date}</span>
          </div>
          {/* <div className={styles.headerRight}>
            <IconButton>...</IconButton>
          </div> */}
        </div>

        <h2>{article.title}</h2>
      </div>

      <div className={styles.coverImage}>
        <img src={article.cover_image} alt="Cover" />
      </div>

      <div className={styles.centeredContentWrapper}>{article.content}</div>
      <div className={styles.centeredContentWrapper}>
        <StatsButtons likes={article.likes} />
      </div>
    </div>
  );
};
