import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { roomsReducer } from './rooms/rooms';
import authReducer from './auth/index';
import reservationsReducer from './reservations/reservations';

const reducer = combineReducers({
  roomsReducer,
  reservationsReducer,
  authReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
