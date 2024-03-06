import { PostCard } from './features/post';
import './global.css';

export const App = () => {
  return (
    <div style={{ padding: '24px' }}>
      <h1>Card list</h1>

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
