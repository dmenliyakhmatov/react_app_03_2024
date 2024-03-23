import { Outlet } from 'react-router-dom';
import { PageWrapper } from '../page-wrapper';

export const Root = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
};

// const Compmonent = () => {
//   ////useConetxt - достает данные  из RouterProvider
//   // path: '/',
//   // element: <div>Корнейвой путь</div>,

//   //currentUrl - текущий url

//   const currentUrl = '';
//   const fallbakck = '';

//   if (currentUrl === '/') return <div>Корнейвой путь</div>;

//   if (currentUrl === 'fresh') return <div>Раздел свежее</div>;

//   return fallbakck;
// };
