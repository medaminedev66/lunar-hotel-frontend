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
