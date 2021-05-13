const SET_TABLE = 'SET_TABLE'

const initialState = {
     pageSize: 4,
     // currentPage: 0,
    // countData:12,
    // pageDataCount:10,
    // tablePageCount: 0,

}

export const setTableSize = (state=initialState,action)=>{

    switch (action.type) {

        case SET_TABLE:

            return {
                currentPage:action.currentPage
            }
        default:
            return state
    }

}