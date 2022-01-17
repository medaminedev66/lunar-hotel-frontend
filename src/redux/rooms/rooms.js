const initialState = [];
const FETCH_DATA = 'rooms/FETCH_DATA';
const UPDATE_STATE = 'rooms/UPDATE_STATE';

const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case UPDATE_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default roomsReducer;
