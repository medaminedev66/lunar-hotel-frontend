import * as api from '../api/api';

export const loadCurrentUser = (state) => state.auth.currentUser;

const LOAD_CURRENT_USER = 'auth/curren_user';

export const setCurrentUser = (payload) => ({
  type: LOAD_CURRENT_USER,
  payload,
});

export const login = (payload) => async (dispatch) => {
  const response = await api.login(payload);
  dispatch(setCurrentUser(response));
};

export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch(setCurrentUser(null));
};

const initialState = {
  currentUser: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
