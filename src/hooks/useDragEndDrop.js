import { useCallback, useState } from 'react';

export const useDragEndDrop = initState => {
  const [tableData, setTableData] = useState(initState);
  const [currentData, setCurrentData] = useState(initState);

  const dragStartHandler = useCallback(
    (e, row) => {
      setCurrentData(row);
      e.currentTarget.style.boxShadow = 'none';
    },
    [setCurrentData],
  );

  const dragEndHandler = useCallback(e => {
    e.currentTarget.style.boxShadow = 'none';
  }, []);

  const dragOverHandler = useCallback(e => {
    e.preventDefault();
    e.currentTarget.style.boxShadow = '0  0 10px 7px rgba(0, 0, 0, .2)';
  }, []);

  const dropHandler = useCallback(
    (e, row) => {
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
    },
    [currentData.id, currentData.order, tableData],
  );

  return {
    tableData,
    setCurrentData,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
  };
};
