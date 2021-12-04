import { SET_DATA, setDataAC } from './set_data';
import { ADD_USERS, addUsersAC } from './users';
// import configureStore from 'redux-mock-store';
// import  thunk  from  'redux-thunk';
// import fetchMock  from 'fetch-mock';

// const middlewares = [thunk]
// const mockStore = configureStore(middlewares)

describe('actions', () => {
  it('setDataAC', () => {
    const data = [];
    expect(setDataAC(data)).toEqual({
      type: SET_DATA,
      payload: data,
    });
  });

  it('addUsersAC', () => {
    const expextAction = {
      type: ADD_USERS,
      payload: [9, 9, 9],
    };
    expect(addUsersAC(expextAction.payload)).toEqual(expextAction);
  });

  it('asyncDataThunk', () => {});
});
