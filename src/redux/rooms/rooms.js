/* eslint-disable no-unused-vars */
import * as api from '../../api/api';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';
const CREATE_ROOM = 'rooms/CREATE_ROOM';

export const createNewRoom = (payload) => ({
  type: CREATE_ROOM,
  payload,
});

export const addRoom = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}rooms`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createNewRoom(data));
};

export const dispatchRooms = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getRooms = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}rooms`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(dispatchRooms(data));
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    case CREATE_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};
