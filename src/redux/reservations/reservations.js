const CREATE_RESERVATION = 'reservation/create_reservation';
const GET_SINGLE_RESERVATION = 'reservation/get_single_reservation';
const GET_ALL_RESERVATION = 'reservation/get_all_reservation';
const DELETE_RESERVATION = 'reservation/delete_reservation';

const END_POINT = 'http://localhost:3000';
const API_ROUTE = '/api/v1/';

export const createReservationAction = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const getSingleReservationAction = (payload) => ({
  type: GET_SINGLE_RESERVATION,
  payload,
});

export const getAllReservationAction = (payload) => ({
  type: GET_ALL_RESERVATION,
  payload,
});

export const deleteAReservationAction = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

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

const initialState = [];

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case GET_SINGLE_RESERVATION:
      return action.payload;
    case GET_ALL_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return [...state, state.filter((r) => r.id !== action.payload)];
    default:
      return state;
  }
};

export default reservationsReducer;
