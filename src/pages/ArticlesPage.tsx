import { ArticleList } from '../features/Articles/ui/ArticleList';
import { PageWrapper } from '../features/page-wrapper';

export const ArticlePage = () => {
  return (
    <PageWrapper>
      <div>
        <h2>Популярные статьи</h2>

        <ArticleList />
      </div>
    </PageWrapper>
  );
};
