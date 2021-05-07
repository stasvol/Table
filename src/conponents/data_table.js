import React, {useEffect} from "react";
import { Table } from 'reactstrap';
import  style from './../module.css/module.css'
import PaginationTable from "../pagination/pagination";
import TableTwo from "./table2";
import {asyncDataThunk} from "../Api/api"
import {dataFetch, setDataAC} from "../reducers/set_data";
import {useDispatch} from "react-redux";

const DataTable =({...props})=> {
    console.log(props)
    return (
            <div>
                { props.data && props.data.length !==0 &&
                props.data.financials.map((data,index)=> <div><span>EBITDA:{data.EBITDA}</span>
                     <span>accountsPayable:{data.accountsPayable}</span>
                     <span>capitalSurplus:{data.capitalSurplus}</span>
                     <span>cashChange:{data.cashChange}</span>
                     <span>cashChange:{data.cashChange}</span>
                     <span>cashFlow:{data.cashFlow}</span>
                     <span>currency:{data.currency}</span>
                     <span>fiscalDate:{data.fiscalDate}</span>

                    </div>
                   )
                }
            <Table className={style.tab} striped bordered hover >

                <thead>
                <tr>
                    <th>#</th>
                    <th >First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td >Mark-2</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td >Lar-1</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td>Lar</td>
                    <td> Bird</td>
                    <td>@vk</td>
                    <td>@vk</td>
                </tr>
                </tbody>
            </Table>

       <PaginationTable/>
                {/*<TableTwo/>*/}
            </div>
        );

}
export default DataTable