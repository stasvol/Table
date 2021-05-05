import React from "react";
import {combineReducers, createStore,applyMiddleware} from "redux";
import {setDataRedux} from "../reducers/set_data";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {usersReduc} from "../reducers/users";

const rootReducer = combineReducers({
    data: setDataRedux,
    users: usersReduc
})

export const  store  = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))



window.store = store
