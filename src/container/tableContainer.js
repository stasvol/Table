import React from 'react';
import PropTypes from 'prop-types';

import { usePagination } from '../hooks/usePagination';
import { useDragEndDrop } from '../hooks/useDragEndDrop';
import ComponentPagination from '../components/componentPagination';
import TableComponent from '../components/tableComponent';
import { sortData } from '../utils/sort';

const TableContainer = ({ pages: { pageSize }, pagesCount, mappedData }) => {
  const [currentPage, handleClick] = usePagination();

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
  pagesCount: PropTypes.number.isRequired,
  mappedData: PropTypes.arrayOf(
    PropTypes.shape({
      financials: PropTypes.arrayOf(
        PropTypes.shape({
          fiscalDate: PropTypes.string,
          accountsPayable: PropTypes.number,
          cashChange: PropTypes.number,
          cashFlow: PropTypes.number,
        }),
      ),
    }),
  ).isRequired,

  pages: PropTypes.shape({
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
  }).isRequired,
};

export default TableContainer;
