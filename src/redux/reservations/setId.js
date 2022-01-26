const SET_ID = 'reservations/setId/SET_ID';

export const setId = (payload) => ({
  type: SET_ID,
  payload,
});

export const setIdReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ID:
      return action.payload;

    default:
      return state;
  }
};
