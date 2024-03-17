import { PageWrapper } from './features/page-wrapper';
import './global.css';
import { ArticlePage } from './pages/ArticlesPage';

export const App = () => {
  return (
    <PageWrapper>
      <div style={{ padding: '24px' }}>
        <ArticlePage />
      </div>
    </PageWrapper>
  );
};
