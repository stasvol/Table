import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setDataRedux } from '../reducers/set_data';
import { setTableSize } from '../reducers/set_table';
import { usersReduc } from '../reducers/users';

const rootReducer = combineReducers({
  data: setDataRedux,
  pages: setTableSize,
  users: usersReduc,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;
