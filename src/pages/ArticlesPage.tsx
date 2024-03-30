import { ChangeEvent, useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { PageWrapper } from '../features/page-wrapper';
import { mockPosts } from '../shared/mocks/mockArticles';

export const ArticlePage = () => {
  const [articles, setArticles] = useState(mockPosts);
  // const [searchValue, setSearchValue] = useState('');

  // const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredArticles = mockPosts.filter(article =>
      article.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()),
    );

    return setArticles(filteredArticles);
  };

  return (
    <PageWrapper onSearchChange={onSearchChange}>
      <div>
        <h2>Популярные статьи</h2>

        <ArticleList articles={articles} />
      </div>
    </PageWrapper>
  );
};
