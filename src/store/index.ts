import { configureStore } from '@reduxjs/toolkit';
import { userDataSlice } from './userData';

export const rootStore = configureStore({
  reducer: {
    [userDataSlice.name]: userDataSlice.reducer,
  },
  devTools: true,
});
