import axios from 'axios';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

// create an endoint for the api using the url and fetching the data
export const api = axios.create({
  baseURL: `${END_POINT}${API_ROUTE}`,
});

export const baseApi = axios.create({
  baseURL: `${END_POINT}`,
});

// function that allows a user to register
export const signup = async (user) => {
  const response = await baseApi.post('/users/signup', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  return { authToken, currentUser };
};

export const login = async (user) => {
  const response = await baseApi.post('/users/login', { user });
  const authToken = response.headers.authorization;
  const currentUser = response.data;

  return { authToken, currentUser };
};

export const logout = async () => {
  await api.delete('/users/sign_out');
};

// get and display all the rooms
export const getRooms = async () => {
  const response = await api.get('/rooms');
  return response.data;
};

// get a single room
export const getRoom = async (id) => {
  const response = await api.get(`/rooms/${id}`);
  return response.data;
};

// create a new room
export const createRoom = async (room) => {
  const response = await api.post('/rooms/', room);
  return response.data;
};

// delete a room
export const deleteRoom = async (id) => {
  const response = await api.delete(`/rooms/${id}`);
  return response.data;
};

// create a new reservation
export const createReservation = async (reservation) => {
  const response = await api.post('/reservations/', reservation);
  return response.data;
};

// get all reservations
export const getReservations = async () => {
  const response = await api.get('/reservations');
  return response.data;
};

// get a single reservation
export const getReservation = async (id) => {
  const response = await api.get(`/reservations/${id}`);
  return response.data;
};

// delete a reservation
export const deleteReservation = async (id) => {
  const response = await api.delete(`/reservations/${id}`);
  return response.data;
};
