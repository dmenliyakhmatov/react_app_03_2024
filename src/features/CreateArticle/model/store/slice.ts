import { createSlice } from '@reduxjs/toolkit';
import { createArticle } from './effects';

type CreateArticleState = {
  isLoading: boolean;
  error: string | null;
};

const initialState: CreateArticleState = {
  isLoading: false,
  error: null,
};

export const creationArticleSlice = createSlice({
  name: 'createArticle',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createArticle.pending, state => {
        state.isLoading = true;
      })
      .addCase(createArticle.fulfilled, state => initialState)
      .addCase(createArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Что-то пошло не так';
      });
  },
  selectors: {
    getCreateArticleIsLoading: state => state.isLoading,
  },
});

export const { getCreateArticleIsLoading } = creationArticleSlice.selectors;
