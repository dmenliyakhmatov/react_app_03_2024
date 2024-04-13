import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { defineUserDataFromStorage, userDataSlice } from './userData';

export const rootStore = configureStore({
  reducer: {
    [userDataSlice.name]: userDataSlice.reducer,
  },
  devTools: true,
  preloadedState: {
    userData: defineUserDataFromStorage(),
  },
});

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
