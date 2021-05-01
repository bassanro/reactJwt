import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

export const userService = { 
  getAll
};

function getAll() {
  return axios.get(API_URL + 'users', { headers: authHeader() });
}

