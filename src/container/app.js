import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { asyncDataThunk } from '../api/api';
import DataTable from '../components/data_table';

import '../App.css';

function App(props) {
  const dispatch = useDispatch();
  const data = useSelector(({ data }) => ({ ...data.data }));
  const pages = useSelector(({ pages }) => ({ ...pages }));

  useEffect(() => {
    dispatch(asyncDataThunk());
  }, [dispatch]);

  return (
    <div className="heading">
      {data.financials && pages && (
        <DataTable data={data} pages={pages} {...props} />
      )}
    </div>
  );
}

export default App;