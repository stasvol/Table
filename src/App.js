import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import axios from "axios";
import {dataFetch, setDataAC} from "./reducers/set_data";
import {useDispatch, useSelector} from "react-redux";
import {asyncThunk} from "./asyncAction/asyncThunk";
import {asyncDataThunk} from "./Api/api";
import DataTable from "./conponents/data_table";
import TableTwo from "./conponents/table2";
import {useEffect} from "react";

function App (props) {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data.data)
    const users = useSelector(state=>state.users)
    // const dataFetch = dispatch(asyncDataThunk())

    useEffect(() =>{
           dispatch(asyncDataThunk())
            // dataFetch(data)
    },[])

    console.log(data)
    return (
    <div className="App">

      <h1>Hello World</h1>
        <div>
            <Button onClick={()=> dispatch(asyncThunk())} color="primary">USERS</Button>{' '}
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
        <DataTable data={data} />

        {/*<TableTwo/>*/}
    </div>
  );
}


export default App;
