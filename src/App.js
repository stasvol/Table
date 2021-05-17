import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import axios from "axios";
import {dataFetch, setDataAC} from "./reducers/set_data";
import {useDispatch, useSelector} from "react-redux";
import {asyncThunk} from "./asyncAction/asyncThunk";
import {asyncDataThunk} from "./Api/api";
import DataTable from "./components/data_table";
import React, {useEffect} from "react";
import TestTable from "./components/testTable";
import PaginationTable from "./pagination/pagination1";
import Simple from "./components/drag";




function App (props) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data.data)
    const users = useSelector(state=>state.users)
    const pages = useSelector(state=>state.pages)
    // const dataFetch = dispatch(asyncDataThunk())
    //  console.log(pages)

    useEffect(() =>{
           dispatch(asyncDataThunk())
            // dataFetch(data)
    },[])


    return (
    <div className="App">


        <div>
            {/*<Button onClick={()=> dispatch(asyncThunk())} color="primary">USERS</Button>{' '}*/}
            {/*<Button onClick={()=> dispatch(asyncDataThunk())} color="secondary">secondary</Button>{' '}*/}
            {/*<Button color="success">success</Button>{' '}*/}
            {/*<Button color="info">info</Button>{' '}*/}
            {/*<Button color="warning">warning</Button>{' '}*/}
            {/*<Button color="danger">danger</Button>{' '}*/}
            {/*<Button color="link">link</Button>*/}
            {
                  users.users.map(user=><div style={{color:"slategray",fontSize:"1rem",
                      border:"1px solid black",padding:"2px",margin:5,width:250,marginLeft:50}}>
                     <div key={user}>{user.name}</div>
                     <div >{user.username}</div>
                     <div >{user.email}</div>
                      </div>
                  )
            }
        </div>
        {data.financials && pages && (
            <DataTable data={data} pages={pages} {...props}/>
        )}

         {/*<PaginationTable/>*/}
        {/*<TableTwo/>*/}
       {/*<TestTable/>*/}
       {/*<Simple/>*/}
    </div>
  );
}


export default App;
