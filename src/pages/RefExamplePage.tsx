import { useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { mockPosts } from '../shared/mocks/mockArticles';

export const RefExamplePage = () => {
  const [articles, setArticles] = useState(mockPosts);

  return (
    // <PageWrapper>
    <div>
      <h2>Свежие статьи</h2>

      <ArticleList articles={articles} />
    </div>
    // </PageWrapper>
  );
};
