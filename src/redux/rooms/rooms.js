const END_POINT = 'http://localhost:3000/';
const API_ROUTE = '/api/v1/';

const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';
const CREATE_ROOM = 'rooms/CREATE_ROOM';
const DELETE_ROOM = 'rooms/DELETE_ROOM';

const initialState = [];

export const createNewRoom = (payload) => ({
  type: CREATE_ROOM,
  payload,
});

export const dispatchRooms = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const deleteRoomAction = (payload) => ({
  type: DELETE_ROOM,
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

export const deleteRoom = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${END_POINT}${API_ROUTE}rooms/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteRoomAction(id));
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case DELETE_ROOM:
      return state.filter((room) => room.id !== parseInt(action.payload, 10));
    case UPDATE_STATE:
      return action.payload;
    case CREATE_ROOM:
      return [...state, action.payload];
    default:
      return state;
  }
};
