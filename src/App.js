import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import axios from "axios";
import {setDataAC} from "./reducers/set_data";
import {useDispatch, useSelector} from "react-redux";
import {asyncThunk} from "./asyncAction/asyncThunk";
import {asyncDataThunk} from "./Api/api";
import DataTable from "./conponents/data_table";
import TableTwo from "./conponents/table2";

function App() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data)
    const users = useSelector(state=>state.users)

  return (
    <div className="App">

      <h1>Hello World</h1>
        <div>
            <Button onClick={()=> dispatch(asyncThunk())} color="primary">USERS</Button>{' '}
            <Button onClick={()=> dispatch(asyncDataThunk())} color="secondary">secondary</Button>{' '}
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
        <DataTable/>

        {/*<TableTwo/>*/}
    </div>
  );
}


export default App;
