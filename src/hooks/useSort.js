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
      tableData.map(d => {
        if (d.id === row.id) {
          return { ...d, order: currentData.order };
        }
        if (d.id === currentData.id) {
          return { ...d, order: row.order };
        }
        return d;
      }),
    );
    e.currentTarget.style.boxShadow = 'none';
  };
  const sortData = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };
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
