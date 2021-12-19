import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTableSelectors } from '../hooks/useTableSelectors';
import { asyncDataThunk } from '../ducks/asyncData';
import DataTable from '../components/data_table';

const App = () => {
  const dispatch = useDispatch();
  const { data, pages, pagesCount, mappedData } = useTableSelectors();

  useEffect(() => {
    dispatch(asyncDataThunk());
  }, [dispatch]);

  return (
    <div className="heading">
      {data.financials && pages && (
        <DataTable
          data={data}
          mappedData={mappedData}
          pages={pages}
          pagesCount={pagesCount}
        />
      )}
    </div>
  );
};

export default App;
