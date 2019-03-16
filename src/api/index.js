import axios from 'axios';
import _ from 'lodash';
const { NODE_ENV, API_DEV_URL, API_PROD_URL } = process.env;
export const baseURL = NODE_ENV === 'production' ? API_PROD_URL : API_DEV_URL;
const api = axios.create({
  baseURL,
});

export default api;
