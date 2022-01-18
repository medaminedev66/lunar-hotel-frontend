import * as api from '../../api/api';

const initialState = {
  Id: {},
  byId: [],
};

const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';

export const dispatchRooms = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getRooms = async (dispatch) => {
  const response = await api.getRooms();
  if (response?.length) {
    dispatch(dispatchRooms(response));
  }
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
