import { useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { PageWrapper } from '../features/page-wrapper';
import { mockPosts } from '../shared/mocks/mockArticles';

export const ArticlePage = () => {
  const [articles, setArticles] = useState(mockPosts);

  return (
    <PageWrapper>
      <div>
        <h2>Популярные статьи</h2>

        <ArticleList articles={articles} />
      </div>
    </PageWrapper>
  );
};
