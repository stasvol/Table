export const SET_TABLE = 'SET_TABLE';

const initialState = {
  pageSize: 2,
};

export const setTableSize = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
