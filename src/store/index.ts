import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userDataSlice } from './userData';

export const rootStore = configureStore({
  reducer: {
    [userDataSlice.name]: userDataSlice.reducer,
  },
  devTools: true,
});

export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
