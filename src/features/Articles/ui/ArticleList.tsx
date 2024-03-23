import { PostCard } from 'shared/features/Article/ArticleCard';
import { mockPosts } from 'shared/mocks/mockArticles';

export const ArticleList = () => {
  return (
    <div>
      {mockPosts.map((article, index) => (
        <PostCard postData={article} key={index} />
      ))}
    </div>
  );
};
