import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/Root';
import { ArticlePage } from '../pages/ArticlePage';
import { AuthPage } from '../pages/Auth';
import { FreshPage } from '../pages/FreshPage';
import { PopularPage } from '../pages/PopularPage';
import { ResizeExamplePage } from '../pages/ResizeExample';
import { TimerPage } from '../pages/TimerPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        index: true,
        element: <PopularPage />,
      },
      {
        path: ROUTES.FRESH,
        element: <FreshPage />,
      },
      {
        path: `${ROUTES.ARTICLE}/:id`,
        element: <ArticlePage />,
      },
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: ROUTES.TIMER,
        element: <TimerPage />,
      },
      {
        path: ROUTES.RESIZE,
        element: <ResizeExamplePage />,
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <PopularPage />,
  // },
  // {
  //   path: '/fresh',
  //   element: <FreshPage />,
  // },
]);
