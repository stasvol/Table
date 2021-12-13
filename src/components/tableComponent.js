import React from 'react';
import { Table } from 'reactstrap';

import PropTypes from 'prop-types';
import { sortData } from '../utils/sort';

import style from '../styles/styles.css';

const TableComponent = ({
  tableData,
  dragStartHandler,
  dragEndHandler,
  dragOverHandler,
  dropHandler,
  currentPage,
  pageSize,
}) => {
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
    </>
  );
};

TableComponent.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  dragStartHandler: PropTypes.func,
  dragEndHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
};

TableComponent.defaultProps = {
  dragStartHandler: () => {},
  dragEndHandler: () => {},
  dragOverHandler: () => {},
  dropHandler: () => {},
};

export default TableComponent;
