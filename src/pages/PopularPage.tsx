import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { useFetch } from '../hooks/useFetch';
import Select from '../shared/components/Select';
import Loader from '../shared/components/loader';
import { Article } from '../shared/types/article';

export const PopularPage = () => {
  const [params, setParams] = useSearchParams();
  const section = params.get('section') || 'all';

  const { data: articles, isLoading } = useFetch<Article[]>('/articles?_relations=users');

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
