import { roomsReducer } from '../redux/rooms/rooms';
import authReducer from '../redux/auth';
import { reservationsReducer } from '../redux/reservations/reservations';

describe('roomsReducer', () => {
  it('should return the initial state', () => {
    expect(roomsReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_DATA', () => {
    expect(
      roomsReducer([], {
        type: 'rooms/FETCH_DATA',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle UPDATE_STATE', () => {
    expect(
      roomsReducer([], {
        type: 'rooms/UPDATE_STATE',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle CREATE_ROOM', () => {
    expect(
      roomsReducer([], {
        type: 'rooms/CREATE_ROOM',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([[{ id: 1, name: 'test' }]]);
  });
});

describe('authReducer', () => {
  it('should return the initial state', () => {
    expect(authReducer(undefined, {})).toEqual(
      {
        currentUser: null,
        token: null,
      },
    );
  });

  it('should handle LOAD_CURRENT_USER', () => {
    expect(
      authReducer(
        {
          currentUser: null,
          token: null,
        },
        {
          type: 'auth/current_user',
          payload: {
            currentUser: {
              id: 1,
              name: 'test',
            },
            token: 'token',
          },
        },
      ),
    ).toEqual({
      currentUser: {
        id: 1,
        name: 'test',
      },
      token: 'token',
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      authReducer({}, {
        type: 'auth/LOGOUT',
      }),
    ).toEqual({});
  });
});

describe('reservationsReducer', () => {
  it('should return the initial state', () => {
    expect(reservationsReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_DATA', () => {
    expect(
      reservationsReducer([], {
        type: 'reservations/FETCH_DATA',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });

  it('should handle UPDATE_STATE', () => {
    expect(
      reservationsReducer([], {
        type: 'reservations/UPDATE_STATE',
        payload: [{ id: 1, name: 'test' }],
      }),
    ).toEqual([{ id: 1, name: 'test' }]);
  });
});
