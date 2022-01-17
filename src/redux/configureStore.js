import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import roomsReducer from './rooms/rooms';
import authReducer from './auth';

const reducer = combineReducers({
  roomsReducer,
  auth: authReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
