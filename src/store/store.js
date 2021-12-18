import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setDataRedux } from '../ducks/set_data/set_data';
import { setTableSize } from '../ducks/set_table/set_table';

const rootReducer = combineReducers({
  data: setDataRedux,
  pages: setTableSize,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
