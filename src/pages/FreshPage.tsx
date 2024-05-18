import { useSearchParams } from 'react-router-dom';
import { ArticleList } from '../features/Articles/ui/ArticleList';
import { useGetFreshArticlesQuery } from '../services/articles';
import Loader from '../shared/components/loader';

export const FreshPage = () => {
  const [params, setParams] = useSearchParams();

  const page = Number(params.get('page') || 1);

  const setPage = (page: number) => {
    params.set('page', String(page));
    setParams(params);
  };

  const { data, isLoading, isFetching } = useGetFreshArticlesQuery(page);

  // const [fetch, { isLoading, isFetching, data }] = useLazyGetFreshArticlesQuery();

  // useEffect(() => {
  //   fetch(page);
  // }, [page, fetch]);

  if (isLoading) return <Loader />;
  if (!data?.items) return <div>There are not articles</div>;

  return (
    // <PageWrapper>
    <div>
      <h2>Свежие статьи</h2>

      <ArticleList articles={data.items} />
      <button
        onClick={() => {
          setPage(page - 1);
        }}
        disabled={isFetching || page === 1}
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} disabled={isFetching || data.meta.total_pages === page}>
        Next
      </button>
    </div>
    // </PageWrapper>
  );
};
