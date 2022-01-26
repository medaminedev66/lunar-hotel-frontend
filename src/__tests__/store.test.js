import store, { persistor } from '../redux/configureStore';
import { api } from '../api/api';

describe('store', () => {
  it('should return the initial state', () => {
    expect(store.getState()).toEqual(
      {
        _persist: {
          rehydrated: true,
          version: -1,
        },
        auth: {
          currentUser: null,
          token: null,
        },
        reservationsReducer: [],
        roomsReducer: [],
        setIdReducer: [],
      },
    );
  });
});

describe('persistor', () => {
  it('should return the initial state', () => {
    expect(persistor.getState()).toEqual(
      {
        bootstrapped: true,
        registry: [],
      },
    );
  });
});

describe('api', () => {
  it('should return the initial state', () => {
    expect(api.interceptors.request.use).toBeDefined();
    expect(api.interceptors.response.use).toBeDefined();
  });
});

describe('api.interceptors.request', () => {
  it('should return the initial state', () => {
    expect(api.interceptors.request.use).toBeDefined();
  });
});

describe('api.interceptors.response', () => {
  it('should return the initial state', () => {
    expect(api.interceptors.response.use).toBeDefined();
  });
});
