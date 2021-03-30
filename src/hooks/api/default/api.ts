import axios from 'axios';
import config from '../../../config';

export const getRequest = () =>
  axios.create({
    baseURL: config.apiHost,
  });
