import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { roomsReducer } from './rooms/rooms';
import authReducer from './auth';
import { reservationsReducer } from './reservations/reservations';
import { setIdReducer } from './reservations/setId';

const reducer = combineReducers({
  roomsReducer,
  reservationsReducer,
  setIdReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default store;
