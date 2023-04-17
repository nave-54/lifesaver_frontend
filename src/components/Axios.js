import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lifesaver.onrender.com',
});

export default api;
