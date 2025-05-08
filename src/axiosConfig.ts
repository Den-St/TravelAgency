import axios from 'axios';
import { getToken } from './features/auth/helpers/tokenHandlers';

export const getConfig = () => {
  const token = getToken();
  return {
    headers: { Authorization: token },
  };
};

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  ...getConfig(),
});

export default instance;
