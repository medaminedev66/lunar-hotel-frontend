import * as api from '../../api/api';

const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';

export const dispatchRooms = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getRooms = (payload) => async (dispatch) => {
  const response = await api.getRooms(payload);
  dispatch(dispatchRooms(response));
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
};
