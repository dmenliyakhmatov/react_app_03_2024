import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateArticleForm } from '../features/CreateArticle/model/schemes/createArticles';
import { Article } from '../shared/types/article';
import { RootState } from '../store';

type ResponseList<Data> = {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: Data[];
};

export const articlesApi = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://68f241df693169c2.mokky.dev',
    prepareHeaders: (headers, { getState }) => {
      const store = getState() as RootState;
      const token = store.userData.userData.token;
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    },
  }),
  tagTypes: ['Articles'],
  endpoints: builder => ({
    getFreshArticles: builder.query<ResponseList<Article>, number>({
      query: page => `fresh_articles?sortBy=-publication_date&page=${page}&limit=2`,
      providesTags: ['Articles'],
    }),
    createArticle: builder.mutation<unknown, CreateArticleForm & { user_id: number }>({
      query: args => ({
        url: '/fresh_articles?_relations=users',
        method: 'POST',
        body: {
          publication_date: new Date().toISOString(),
          views: 0,
          likes: 0,
          comments: 0,
          bookmarks: 0,
          ...args,
        },
      }),
      invalidatesTags: ['Articles'],
    }),
  }),
});

export const { useGetFreshArticlesQuery, useLazyGetFreshArticlesQuery, useCreateArticleMutation } = articlesApi;
