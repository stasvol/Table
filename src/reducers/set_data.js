export const SET_DATA = 'SET_DATA';

const initialState = {
  data: [],
};

export const setDataRedux = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
};
export const setDataAC = data => ({ type: SET_DATA, payload: data });
