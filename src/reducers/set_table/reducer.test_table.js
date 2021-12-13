import { SET_TABLE, setTableSize } from './set_table';

it('setTableSize', () => {
  const state = {};
  const action = {
    type: SET_TABLE,
    payload: 3,
  };

  expect(setTableSize(state, action)).toEqual({
    currentPage: action.payload,
  });
});
