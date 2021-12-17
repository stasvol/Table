import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setDataRedux } from '../reducers/set_data/set_data';
import { setTableSize } from '../reducers/set_table/set_table';

const rootReducer = combineReducers({
  data: setDataRedux,
  pages: setTableSize,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
