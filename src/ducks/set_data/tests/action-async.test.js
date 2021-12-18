import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

import { URL } from '../../../constants/patchApi';
import { asyncDataThunk } from '../../asyncData';
import { setDataAC } from '../set_data';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async-thunk', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should dispatches the correct actions on a failed fetch request', () => {
    fetchMock.getOnce(URL, JSON.stringify([9, 9, 9]));
    const expextAction = [setDataAC([9, 9, 9])];
    const store = mockStore();

    return store.dispatch(asyncDataThunk()).then(() => {
      expect(store.getActions()).toEqual(expextAction);
    });
  });
});
