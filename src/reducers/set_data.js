const Set_data = 'Set_data'


const initialState ={}


export const setDataRedux = (state=initialState,action) =>{

    switch (action.type) {
        case Set_data:

            return{
               data: action.payload
            }

        default:
            return state;
    }
}
export const setDataAC = (data) =>({type:Set_data,payload:data})