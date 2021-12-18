import { setDataRedux, SET_DATA } from '../set_data';

describe('testing reducers', () => {
  it('setDataRedux ', () => {
    const state = {
      data: null,
    };
    const action = {
      type: SET_DATA,
      payload: [1, 2, 3],
    };
    expect(setDataRedux(state, action)).toEqual({
      data: action.payload,
    });
  });
});
