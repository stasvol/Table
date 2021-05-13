const SET_DATA = 'SET_DATA'
const DATA_FETCH ='DATA_FETCH'

const initialState ={
    data:[],
}


export const setDataRedux = (state=initialState,action) =>{

    switch (action.type) {
        case SET_DATA:

            return{
                data: action.payload,

            }

        default:
            return state;
    }
}
export const setDataAC = (data) =>({type:SET_DATA,payload:data})
// export const dataFetch = (data) =>({type:DATA_FETCH,data})
