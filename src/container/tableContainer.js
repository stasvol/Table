import React from 'react';
import PropTypes from 'prop-types';

import { usePagination } from '../hooks/usePagination';
import { useDragEndDrop } from '../hooks/useDragEndDrop';
import ComponentPagination from '../components/componentPagination';
import TableComponent from '../components/tableComponent';
import { sortData } from '../utils/sort';

const TableContainer = ({ data: { financials }, pages: { pageSize } }) => {
  const pagesCount = Math.ceil(financials?.length / pageSize);
  const [currentPage, handleClick] = usePagination();

  const mappedData = financials?.map(
    ({ fiscalDate, accountsPayable, cashChange, cashFlow }, i) => ({
      order: i + 1,
      id: Math.ceil(new Date().getTime() * Math.random() * 100),
      fiscalDate,
      accountsPayable,
      cashChange,
      cashFlow,
    }),
  );

  const {
    tableData,
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dropHandler,
  } = useDragEndDrop(mappedData);

  const tableDataDragging = tableData
    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
    .sort(sortData);

  return (
    <>
      <TableComponent
        currentPage={currentPage}
        dragEndHandler={dragEndHandler}
        dragOverHandler={dragOverHandler}
        dragStartHandler={dragStartHandler}
        dropHandler={dropHandler}
        pageSize={pageSize}
        tableDataDragging={tableDataDragging}
      />
      <ComponentPagination
        currentPage={currentPage}
        handleClick={handleClick}
        pagesCount={pagesCount}
      />
    </>
  );
};

TableContainer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.shape({
      financials: PropTypes.array,
      fiscalDate: PropTypes.number,
      accountsPayable: PropTypes.number,
      cashChange: PropTypes.number,
      cashFlow: PropTypes.number,
    }),
  ]).isRequired,

  pages: PropTypes.shape({
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
  }).isRequired,
};

export default TableContainer;
