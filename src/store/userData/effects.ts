import { createAsyncThunk } from '@reduxjs/toolkit';
import { post } from '../../transport';
import { AuthFormData, AuthResponse } from './types';

export const postAuthData = createAsyncThunk('userData/postAuth', async (payload: AuthFormData) => {
  const {
    data: { data, token },
  } = await post<AuthResponse>(`/auth`, payload);

  const userData = { ...data, token };

  return userData;
});
