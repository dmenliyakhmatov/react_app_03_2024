import { useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { mockPosts } from '../shared/mocks/mockArticles';

export const PopularPage = () => {
  const [articles, setArticles] = useState(mockPosts);

  return (
    // <PageWrapper>
    <div>
      <h2>Популярные статьи</h2>

      <ArticleList articles={articles} />
    </div>
    // </PageWrapper>
  );
};
