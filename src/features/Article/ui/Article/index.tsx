import { useState } from 'react';
import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import { mockPosts } from 'shared/mocks/mockArticles';
import styles from './post.module.css';

type ArticleProps = {
  id: number;
};

export const Article = ({ id }: ArticleProps) => {
  const [article, setArticle] = useState(mockPosts.find(article => Number(id) === article.id) ?? null);

  if (!article) return null;

  return (
    <div className={styles.postCard}>
      <div className={styles.centeredContentWrapper}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span>{article.section}</span>
            <div className={styles.authorInfo}>
              <img src={article.authorAvatar} alt={`${article.authorName}'s Avatar`} className={styles.avatar} />
              <span>{article.authorName}</span>
            </div>
            <span>{article.publicationDate}</span>
          </div>
          {/* <div className={styles.headerRight}>
            <IconButton>...</IconButton>
          </div> */}
        </div>

        <h2>{article.title}</h2>
      </div>

      <div className={styles.coverImage}>
        <img src={article.coverImage} alt="Cover" />
      </div>

      <div className={styles.centeredContentWrapper}>{article.content}</div>
      <div className={styles.centeredContentWrapper}>
        <StatsButtons likes={article.likes} />
      </div>
    </div>
  );
};
