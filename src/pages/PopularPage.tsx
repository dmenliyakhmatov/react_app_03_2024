import { useEffect, useState } from 'react';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { Article } from '../shared/types/article';

export const PopularPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://68f241df693169c2.mokky.dev/articles')
      .then(res => res.json())
      .then((articlesData: Article[]) => {
        setArticles(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Популярные статьи</h2>
      <h3>{count}</h3>
      <button onClick={increment}>increment</button>

      {isLoading && <div>Loading...</div>}

      {!!articles && !isLoading && <ArticleList articles={articles} />}
    </div>
  );
};

// console.log('render PopularPage');

// useEffect(() => {
//   console.log('mount ');

//   return () => console.log('unmount');
// }, []);

// useEffect(() => {
//   console.log('update ', count);

//   return () => console.log('before update', count);
// }, [count]);
