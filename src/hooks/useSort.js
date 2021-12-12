import { useState } from 'react';

export const useSort = initState => {
  const [tableData, setTableData] = useState(initState);
  const [currentData, setCurrentData] = useState(initState);

  const dragStartHandler = (e, row) => {
    setCurrentData(row);
  };

  const dragEndHandler = e => {
    e.currentTarget.style.boxShadow = 'none';
  };

  const dragOverHandler = e => {
    e.preventDefault();
    e.currentTarget.style.boxShadow = '0  0 10px 7px rgba(0, 0, 0, .2)';
  };

  const dropHandler = (e, row) => {
    e.preventDefault();
    setTableData(
      tableData.map(data => {
        if (data.id === row.id) {
          return { ...data, order: currentData.order };
        }
        if (data.id === currentData.id) {
          return { ...data, order: row.order };
        }
        return data;
      }),
    );
    e.currentTarget.style.boxShadow = 'none';
  };

  const sortData = (a, b) => (a.order > b.order ? 1 : -1);

  return {
    tableData,
    setCurrentData,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
    sortData,
  };
};
