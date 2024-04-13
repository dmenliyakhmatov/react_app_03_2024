import axios from 'axios';
import { STORAGE_KEYS, getStorageItem } from '../utils/storage';

const baseInstance = axios.create({
  baseURL: 'https://68f241df693169c2.mokky.dev',
  timeout: 3000,
});

baseInstance.interceptors.request.use(config => {
  const userData = getStorageItem(STORAGE_KEYS.USER_DATA);
  const token = userData?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const get = baseInstance.get;

export const post = baseInstance.post;
