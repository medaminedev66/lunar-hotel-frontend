import { createRoom } from '../../api/api';

const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';
const CREATE_ROOM = 'rooms/CREATE_ROOM';

export const createNewRoom = (payload) => ({
  type: CREATE_ROOM,
  payload,
});

export const addRoom = (payload) => async (dispatch) => {
  const response = await createRoom(payload);
  dispatch(createNewRoom(response));
};

const roomsReducer = (state = initialState, action) => {
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

export default roomsReducer;
