import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { Article } from '../features/Article/ui/Article';

export const ArticlePage = () => {
  const { id } = useParams();
  //   const naigate = useNavigate();
  const location = useLocation();

  const [params, setParams] = useSearchParams();

  console.log(location);

  if (!id) return <h2>Такой статьи не существует</h2>;

  return (
    <>
      {/* <button onClick={() => naigate(ROUTES.ROOT)}>Вернуться</button> */}
      {/* {Number(id) === 1 && <Navigate to={ROUTES.ROOT} />} */}

      <button
        onClick={() => {
          params.set('section', 'technology');
          setParams(params);
        }}
      >
        Технологии
      </button>
      <button
        onClick={() => {
          params.set('section', 'trevel');
          setParams(params);
        }}
      >
        Путешествия
      </button>
      <Article id={Number(id)} />
    </>
  );
};

// git clone
// git pull
//git commit -m "fix"
//git push

//git push origin lession_5 -u
