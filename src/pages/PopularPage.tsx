import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import Select from '../shared/components/Select';
import Loader from '../shared/components/loader';
import { Article } from '../shared/types/article';
import { get } from '../transport';

export const PopularPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const section = params.get('section') || 'all';

  useEffect(() => {
    setIsLoading(true);

    //описание того, как в моки дев работает фильтрация
    //https://mokky.gitbook.io/welcome/obrashenie-k-resursam/filtraciya/prostoi-poisk

    get<Article[]>(`/articles`, { params: section === 'all' ? {} : { section } }) //фильтруем список по разделу
      .then(({ data }) => {
        setArticles(data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [section]);

  return (
    <div>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <h2>Популярные статьи</h2>

        <Select
          value={section}
          onChange={e => {
            params.set('section', e.target.value);
            setParams(params);
          }}
          options={[
            { label: 'Все', value: 'all' },
            { label: 'Путешествия', value: 'Путешествия' },
            { label: 'Животные', value: 'Животные' },
          ]}
        />
      </div>

      {isLoading && <Loader />}

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
