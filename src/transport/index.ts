import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'https://68f241df693169c2.mokky.dev',
  timeout: 3000,
});

export const get = baseInstance.get;

export const post = baseInstance.post;
