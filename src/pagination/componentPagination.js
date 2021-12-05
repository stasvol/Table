import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

import style from '../module.css/module.css';

const ComponentPagination = ({ ...props }) => {
  const pagesCount = Math.ceil(
    props.data.financials?.length / props.pages.pageSize,
  );

  const [currentPage, setCurrentPage] = useState(0);

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentPage(index);
  };

  const mappedData = props?.data?.financials?.map(
    ({ fiscalDate, accountsPayable, cashChange, cashFlow }, i) => ({
      order: i + 1,
      id: Math.ceil(new Date().getTime() * Math.random() * 100),
      fiscalDate,
      accountsPayable,
      cashChange,
      cashFlow,
    }),
  );

  const [data, setData] = useState(mappedData);
  const [currentData, setCurrentData] = useState(null);

  const dragStartHandler = (e, data) => {
    setCurrentData(data);
  };

  const dragEndHandler = e => {
    // e.currentTarget.style.background = 'white'
    e.currentTarget.style.boxShadow = 'none';
  };

  const dragOverHandler = e => {
    e.preventDefault();
    // e.currentTarget.style.background = '#d5f5f5'
    e.currentTarget.style.boxShadow = '0  0 10px 7px rgba(0, 0, 0, .2)';
    // '.2em .2em #d5f5f5, -0 .2em 1em .6em #d5f5f5'
    // '-6px   -6px    #d4eefa'
  };

  const dropHandler = (e, row) => {
    e.preventDefault();

    // console.log('drop', row);

    setData(
      data.map(d => {
        if (d.id === row.id) {
          return { ...d, order: currentData.order };
        }

        if (d.id === currentData.id) {
          return { ...d, order: row.order };
        }
        return d;
      }),
    );
    // e.currentTarget.style.background = 'white'
    e.currentTarget.style.boxShadow = 'none';
  };
  const sortData = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;

    // return 0;
  };

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

        {data
          .slice(
            currentPage * props.pages.pageSize,
            (currentPage + 1) * props.pages.pageSize,
            // (currentPage-1) *props.pages.pageSize + 1,
          )
          .sort(sortData)
          .map((data, i) => (
            <tbody // eslint-disable-line
              key={i}
              className={style.active}
              draggable
              onDragEnd={e => dragEndHandler(e)}
              onDragLeave={e => dragEndHandler(e)}
              onDragOver={e => dragOverHandler(e)}
              onDragStart={e => dragStartHandler(e, data)}
              onDrop={e => dropHandler(e, data)}
            >
              <tr>
                <th scope="row">
                  {currentPage * props.pages.pageSize + (i + 1)}
                </th>
                <td>{data.fiscalDate}</td>
                <td>{data.accountsPayable} </td>
                <td>{data.cashChange} </td>
                <td>{data.cashFlow} </td>
              </tr>
            </tbody>
          ))}
      </Table>
      <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            first
            href="#"
            onClick={e => handleClick(e, currentPage <= 0)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            href="#"
            onClick={e => handleClick(e, currentPage - 1)}
            previous
          />
        </PaginationItem>

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem key={i} active={i === currentPage}>
            <PaginationLink href="#" onClick={e => handleClick(e, i)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink
            href="#"
            next
            onClick={e => handleClick(e, currentPage + 1)}
          />
        </PaginationItem>

        {/* <PaginationItem> */}
        {/*    <PaginationLink next /> */}
        {/* </PaginationItem> */}
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink
            href="#"
            last
            onClick={e => handleClick(e, pagesCount - 1)}
          />
        </PaginationItem>
      </Pagination>
    </>
  );
};

ComponentPagination.propTypes = {
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

export default ComponentPagination;
