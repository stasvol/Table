import * as axios from "axios";
import {addUsersAC} from "../reducers/users";
import {setDataAC} from "../reducers/set_data";

const STOCKS_COUNT = 12;
const BASE_PATH = 'https://sandbox.iexapis.com/stable';
const ENDPOINT_PATH = '/stock/AAPL/financials/';
const QUERY_PARAM = 'token=';
// const API_KEY = 'Tpk_d232dd87ed34407dacc92eee1edbf407';
const API_KEY = 'Tpk_feb589a8931a45fead76ff039894d942';
export const URL = `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`;



// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://sandbox.iexapis.com/stable/stock/AAPL/financials/',
//     headers: {
//         "API-KEY": "pk_265e4bc4d9974eb59476ac1aca8b59dc"
//     }
// });
// export const loadData(){
//
//          return  instance.get(`token=12`).then(response=> {
//              return response.data
//
//       }
//    }

// const  axios  =  require ( 'axios' ) ;

// axios.get ( `${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`)
//     .then ( function  ( response )  {
//
//         console.log ( response ) ;
//     })
//     .catch ( function  ( error )  {
//
//         console.log ( error ) ;
//     })
//     .then ( function  ( )  {
//         // выполняется всегда
//     }) ;
//
// // const axios = getData()
// async function getData() {
//     try {
//         const response = await axios.get(`${BASE_PATH}${ENDPOINT_PATH}${STOCKS_COUNT}?${QUERY_PARAM}${API_KEY}`);
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }
// console.log(getData)

export const asyncDataThunk = (data)=>(dispatch) => {

    fetch( URL )
        .then(response=> {
            if (!response.ok){
                 throw new Error(response.statusText)
            }
            return response
        })
        .then(response => response.json())
        .then(data => dispatch(setDataAC(data)))

        .catch(err => console.error(err))

}