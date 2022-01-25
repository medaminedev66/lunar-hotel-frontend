const DELETE_RESERVATION = 'reservation/delete_reservation';
const FETCH_DATA = 'reservations/FETCH_DATA';
const UPDATE_STATE = 'reservations/UPDATE_STATE';
const CREATE_RESERVATION = 'reservations/CREATE_ROOM';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

const initialState = [];

export const createReservationAction = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const deleteAReservationAction = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const dispatchReservations = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getReservations = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}reservations`, {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(dispatchReservations(data));
};

export const deleteReservation = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`${END_POINT}${API_ROUTE}reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteAReservationAction(id));
};

export const createReservation = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${END_POINT}${API_ROUTE}reservations`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createReservationAction(data));
};

export const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return state.filter((obj) => obj.id !== action.payload);
    default:
      return state;
  }
};
