import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTableSelectors } from '../hooks/useTableSelectors';
import { asyncDataThunk } from '../api/api';
import DataTable from '../components/data_table';

const App = () => {
  const dispatch = useDispatch();
  const {
    data: { financials },
    pages,
    pagesCount,
    mappedData,
  } = useTableSelectors();

  useEffect(() => {
    dispatch(asyncDataThunk());
  }, [dispatch]);

  return (
    <div className="heading">
      {financials && pages && (
        <DataTable
          data={financials}
          mappedData={mappedData}
          pages={pages}
          pagesCount={pagesCount}
        />
      )}
    </div>
  );
};

export default App;
