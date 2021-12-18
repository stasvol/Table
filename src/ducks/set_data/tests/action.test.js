import { SET_DATA, setDataAC } from '../set_data';

describe('actions', () => {
  it('setDataAC', () => {
    const data = [];
    expect(setDataAC(data)).toEqual({
      type: SET_DATA,
      payload: data,
    });
  });
});
