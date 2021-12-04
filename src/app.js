import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncDataThunk } from './Api/api';
import DataTable from './components/data_table';

import './App.css';

function App(props) {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const users = useSelector(state => state.users);
  const pages = useSelector(state => state.pages);
  // const dataFetch = dispatch(asyncDataThunk())
  //  console.log(pages)

  useEffect(() => {
    dispatch(asyncDataThunk());
    // dataFetch(data)
  }, [dispatch]);

  return (
    <div className="heading">
      <div>
        {users.users.map(({ name, username, email }) => (
          <div
            key={username}
            style={{
              color: 'slategray',
              fontSize: '1rem',
              border: '1px solid black',
              padding: '2px',
              margin: 5,
              width: 250,
              marginLeft: 50,
            }}
          >
            <div key={name}>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
          </div>
        ))}
      </div>
      {data.financials && pages && (
        <DataTable data={data} pages={pages} {...props} />
      )}

      {/* <PaginationTable/> */}
      {/* <TableTwo/> */}
      {/* <TestTable/> */}
      {/* <Simple/> */}
    </div>
  );
}

export default App;
