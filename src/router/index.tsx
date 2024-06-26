import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/Root';
import { ArticlePage } from '../pages/ArticlePage';
import { AuthPage } from '../pages/Auth';
import { CreateArticlePage } from '../pages/CreateArticlePage';
import { FreshPage } from '../pages/FreshPage';
import { KeyPropPage } from '../pages/KeyPropExample';
import { MemoExamplePage } from '../pages/MemoExample';
import { PopularPage } from '../pages/PopularPage';
import { RefExamplePage } from '../pages/RefExamplePage';
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
      {
        path: ROUTES.CREATE_ARTICLE,
        element: <CreateArticlePage />,
      },
      {
        path: ROUTES.MEMO_EXAMPLE,
        element: <MemoExamplePage />,
      },
      {
        path: ROUTES.KEY_PROP,
        element: <KeyPropPage />,
      },
      {
        path: ROUTES.REF_EXAMPLE,
        element: <RefExamplePage />,
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
