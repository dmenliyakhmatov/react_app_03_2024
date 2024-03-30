import { useEffect, useState } from 'react';
import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import type { Article as ArticleType } from '../../../../shared/types/article';
import styles from './post.module.css';

type ArticleProps = {
  id: number;
};

export const Article = ({ id }: ArticleProps) => {
  const [article, setArticle] = useState<ArticleType | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://68f241df693169c2.mokky.dev/articles/${id}`)
      .then(res => res.json())
      .then((articlesData: ArticleType) => {
        setArticle(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id]);

  if (!article || isLoading) return <>Loading...</>;

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
