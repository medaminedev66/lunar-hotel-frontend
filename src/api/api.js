import axios from 'axios';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

// create an endoint for the api using the url and fetching the data
export const api = axios.create({
  baseURL: `${END_POINT}${API_ROUTE}`,
  // add the authorization header to the request
  headers: {
    Authorization: `${localStorage.getItem('token')}`,
  },
});

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// function that allows a user to register
export const signup = async (user) => {
  const response = await baseApi.post('/users/signup', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;
  localStorage.setItem('token', authToken);

  return { authToken, currentUser };
};

export const login = async (user) => {
  const response = await baseApi.post('/users/login', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  localStorage.setItem('token', authToken);
  return { authToken, currentUser };
};

export const logout = async () => {
  await api.delete('/users/sign_out');
};
