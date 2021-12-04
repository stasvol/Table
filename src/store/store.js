import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { setDataRedux } from '../reducers/set_data';
import { usersReduc } from '../reducers/users';
import { setTableSize } from '../reducers/set_table';

const rootReducer = combineReducers({
  data: setDataRedux,
  users: usersReduc,
  pages: setTableSize,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

window.store = store;
