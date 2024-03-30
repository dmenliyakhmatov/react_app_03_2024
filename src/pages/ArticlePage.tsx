import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Article } from '../features/Article/ui/Article';

export const ArticlePage = () => {
  const { id } = useParams();
  //   const naigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useSearchParams();

  if (!id) return <h2>Такой статьи не существует</h2>;

  return (
    <>
      {/* <button onClick={() => naigate(ROUTES.ROOT)}>Вернуться</button> */}
      {/* {Number(id) === 1 && <Navigate to={ROUTES.ROOT} />} */}

      <button
        onClick={() => {
          params.set('id', '1');
          setParams(params);
        }}
      >
        Технологии
      </button>
      <button
        onClick={() => {
          params.set('id', '2');
          setParams(params);
        }}
      >
        Путешествия
      </button>
      <Article id={Number(params.get('id') ?? 1)} />
    </>
  );
};

// git clone
// git pull
//git commit -m "fix"
//git push

//git push origin lession_5 -u
