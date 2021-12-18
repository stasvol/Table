import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import style from '../styles/styles.css';

const TableComponent = ({
  tableDataDragging,
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
        {tableDataDragging.map((row, i) => {
          const startHandler = e => dragStartHandler(e, row);
          const dropEnd = e => dropHandler(e, row);
          return (
            <tbody
              key={i}
              className={style.tbody}
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
  tableDataDragging: PropTypes.arrayOf(PropTypes.object).isRequired,
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
