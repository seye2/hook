import axios from 'axios';
import { publicRuntimeConfig } from '../../server/getNextConfig';

const { API_URL, NODE_ENV } = publicRuntimeConfig;

const api = axios.create({
  baseURL: API_URL,
});

export default api;
