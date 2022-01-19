import * as api from '../../api/api';

// export const loadReservation = (state) => state.auth.currentUser;

const CREATE_RESERVATION = 'reservation/create_reservation';
const GET_SINGLE_RESERVATION = 'reservation/get_single_reservation';
const GET_ALL_RESERVATION = 'reservation/get_all_reservation';
const DELETE_RESERVATION = 'reservation/delete_reservation';

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

export const reservationCreate = (payload) => async (dispatch) => {
  const response = await api.createReservation(payload);
  dispatch(createReservationAction(response));
};

export const getSingleReservation = (payload) => async (dispatch) => {
  const response = await api.getReservation(payload);
  dispatch(getSingleReservationAction(response));
};

export const getAllReservation = () => async (dispatch) => {
  const response = await api.getReservations();
  dispatch(getAllReservationAction(response));
};

export const deleteAReservation = (payload) => async (dispatch) => {
  const response = await api.deleteReservation(payload);
  dispatch(deleteAReservationAction(response));
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
