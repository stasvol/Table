import { useMemo } from 'react';
import { usePagination } from './usePagination';
import { useDragEndDrop } from './useDragEndDrop';
import { sortData } from '../utils/sort';

export const useCombineData = (mappedData, pageSize) => {
  const [currentPage, handleClick] = usePagination();

  const {
    tableData,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
  } = useDragEndDrop(mappedData);

  const tableDataDragging = useMemo(
    () =>
      tableData
        .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
        .sort(sortData),
    [currentPage, pageSize, tableData],
  );
  return {
    currentPage,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
    tableDataDragging,
    handleClick,
  };
};
