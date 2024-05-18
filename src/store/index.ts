import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { creationArticleSlice } from '../features/CreateArticle/model/store/slice';
import { articlesApi } from '../services/articles';
import { defineUserDataFromStorage, userDataSlice } from './userData';

export const rootStore = configureStore({
  reducer: {
    [userDataSlice.name]: userDataSlice.reducer,
    [creationArticleSlice.name]: creationArticleSlice.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  devTools: true,
  preloadedState: {
    userData: defineUserDataFromStorage(),
  },
  middleware: getDefaultMeddleware => getDefaultMeddleware().concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof rootStore.getState>;

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
