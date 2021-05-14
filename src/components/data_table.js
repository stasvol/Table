import React, {useEffect} from "react";
import { Table } from 'reactstrap';
import  style from './../module.css/module.css'
import PaginationTable from "../pagination/pagination1";



const DataTable =({...props})=> {

    return (
            <div>

                <h2>Symbol: AAPL </h2>
                {/*{ props.data && props.data.length !==0 &&*/}
                {/*props.data.financials.map((data,index)=> <div><span>EBITDA:{data.EBITDA}</span>*/}
                {/*     <span>accountsPayable:{data.accountsPayable}</span>*/}
                {/*     <span>capitalSurplus:{data.capitalSurplus}</span>*/}
                {/*     <span>cashChange:{data.cashChange}</span>*/}
                {/*     <span>cashChange:{data.cashChange}</span>*/}
                {/*     <span>cashFlow:{data.cashFlow}</span>*/}
                {/*     <span>currency:{data.currency}</span>*/}
                {/*     <span>fiscalDate:{data.fiscalDate}</span>*/}

                {/*    </div>*/}
                {/*   )*/}
                {/*}*/}

            {/*<Table   bordered  hover >*/}

            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>#</th>*/}
            {/*        <th >Fiscal Date</th>*/}
            {/*        <th>Accounts Payable</th>*/}
            {/*        <th>Cash Change</th>*/}
            {/*        <th>Cash Flow</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}

            {/*    {*/}
            {/*        props.data && props.data.length !== 0  &&*/}
            {/*        (props.data.financials ).map((data, i) =>*/}

            {/*               <tbody key={i} className={style.tab}>*/}
            {/*                <tr>*/}
            {/*                    <th scope="row">{i + 1}</th>*/}
            {/*                    <td>{data.fiscalDate}</td>*/}
            {/*                    <td>{data.accountsPayable}</td>*/}
            {/*                    <td>{data.cashChange}</td>*/}
            {/*                    <td>{data.cashFlow}</td>*/}
            {/*                </tr>*/}

            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">2</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td>Thornton</td>*!/*/}
            {/*                /!*    <td>@fat</td>*!/*/}
            {/*                /!*    <td>@fat</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">3</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td>the Bird</td>*!/*/}
            {/*                /!*    <td>@twitter</td>*!/*/}
            {/*                /!*    <td>@twitter</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">4</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">5</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">6</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">7</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">8</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">9</th>*!/*/}
            {/*                /!*    <td >{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}
            {/*                /!*<tr>*!/*/}
            {/*                /!*    <th scope="row">10</th>*!/*/}
            {/*                /!*    <td>{data.fiscalDate}</td>*!/*/}
            {/*                /!*    <td> Bird</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*    <td>@vk</td>*!/*/}
            {/*                /!*</tr>*!/*/}

            {/*                </tbody>*/}
            {/*        )*/}
            {/*    }*/}

            {/*</Table>*/}

                <PaginationTable pages={props.pages} data={props.data} {...props} children/>



            </div>
        );

}

export default DataTable