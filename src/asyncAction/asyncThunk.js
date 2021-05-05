
import {addUsersAC} from "../reducers/users";
import URL from "./../Api/api"

export const asyncThunk = ()=>(dispatch) => {

      fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addUsersAC(json)))
}


// export const asyncDataThunk = ()=>(dispatch) => {
//
//       fetch(`${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`)
//           .then(response => response.json())
//           .then(json => dispatch(addUsersAC(json)))
// }