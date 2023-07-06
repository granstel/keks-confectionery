import axios, {AxiosInstance} from 'axios';

const BACKEND_URL = 'https://grading.design.pages.academy/v0/keks/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT
});
