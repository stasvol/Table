import {setDataRedux, SET_DATA} from './set_data'
import {SET_TABLE, setTableSize} from "./set_table";
import {ADD_USERS, usersReduc} from "./users";


describe('testing reducers', () => {

    it('setDataRedux ', () => {
        const state = {
            data: null
        }
        const action = {
            type: SET_DATA,
            payload: [1, 2, 3]
        }
        expect(setDataRedux(state, action)).toEqual({
            // ...state,
            data: action.payload
        })
    });

    it('setTableSize', function () {
        const state = {
            // pageSize: 3
        }
        const action = {
            type: SET_TABLE,
            payload: 9
        }

        expect(setTableSize(state, action)).toEqual({
            currentPage: action.payload
        })
    });

    it('usersReduc', function () {
        const state = {}

        const action = {
            type: ADD_USERS,
            payload: ['atos', 'roma', 'don']
        }

        expect(usersReduc(state, action)).toEqual({
            // ...state,
            users: action.payload
        })
    });

})