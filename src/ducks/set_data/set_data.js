import { dataDefaultState } from '../../constants/dataDefaultState';

export const SET_DATA = 'SET_DATA';

const initialState = {
  data: [] || dataDefaultState,
};

export const setDataRedux = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const setDataAC = data => ({ type: SET_DATA, payload: data });
