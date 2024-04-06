import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './global.css';
import { router } from './router';
import { rootStore } from './store';

export const App = () => {
  // console.log('render App');
  return (
    <Provider store={rootStore}>
      <RouterProvider router={router} />;
    </Provider>
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

// 1. В проекте, который мы пишем на занятии добавьте общий и переиспользуемый компонент кнопки для кнопок like, vies, bookmarks, comment. И использовать его для всех 4-х кнопок.
// В прокете даже есть уже компонент IconButton его нужно просто немного дописать.
// Напомню, что функции можно тоже передавать в пропы

// 2. В этом же проекте в ArticlePage сейчас карточки отрисовываются на основе массива с данными.
// Задача сделать так, чтобы они отрисоывавались полагаясь на стейт, начальное значение которого будет mockPosts

// 3. Делается только после выполнения второго пункта.
// Добавить возможность поиска по названиям постов.
// Тут два пути:
// Простой - добавить в компонент ArticlePage инпут и через него реализовать поиск по постам

// Посложнее, но не сильно - в PageWrapper в Header есть инпут рядом с кнопокй "Новый пост". Сделать поиск по статьям через этот уже готовый инпут.
