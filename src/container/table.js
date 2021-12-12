import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import { usePagination } from '../hooks/usePagination';
import { useSort } from '../hooks/useSort';
import ComponentPagination from '../pagination/componentPagination';

import style from '../styles/styles.css';

const TableComponent = ({ data: { financials }, pages: { pageSize } }) => {
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
    sortData,
  } = useSort(mappedData);

  return (
    <>
      <Table bordered hover>
        <thead className={style.head}>
          <tr>
            <th>#</th>
            <th>Fiscal Date</th>
            <th>Accounts Payable</th>
            <th>Cash Change</th>
            <th>Cash Flow</th>
          </tr>
        </thead>
        {tableData
          .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .sort(sortData)
          .map((row, i) => {
            const startHandler = e => dragStartHandler(e, row);
            const dropEnd = e => dropHandler(e, row);
            return (
              <tbody
                key={i}
                className={style.active}
                draggable
                onDragEnd={dragEndHandler}
                onDragLeave={dragEndHandler}
                onDragOver={dragOverHandler}
                onDragStart={startHandler}
                onDrop={dropEnd}
                role="presentation"
              >
                <tr>
                  <th scope="row">{currentPage * pageSize + (i + 1)}</th>
                  <td>{row.fiscalDate}</td>
                  <td>{row.accountsPayable} </td>
                  <td>{row.cashChange} </td>
                  <td>{row.cashFlow} </td>
                </tr>
              </tbody>
            );
          })}
      </Table>

      <ComponentPagination
        currentPage={currentPage}
        handleClick={handleClick}
        pagesCount={pagesCount}
      />
    </>
  );
};

TableComponent.propTypes = {
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

export default TableComponent;
