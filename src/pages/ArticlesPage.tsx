import { mockPosts } from '../features/Articles/model/mockArticles';
import { PostCard } from '../features/Articles/ui';

export const ArticlePage = () => {
  return (
    <div>
      <h2>Популярные статьи</h2>

      {mockPosts.map((article, index) => (
        <PostCard postData={article} key={index} />
      ))}
    </div>
  );
};
