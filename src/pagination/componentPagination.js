import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import { usePagination } from '../hooks/usePagination'; //eslint-disable-line

// import style from '../module.css/module.css';

const ComponentPagination = ({ pagesCount, currentPage, handleClick }) => {
  // debugger //eslint-disable-line
  // const pagesCount = Math.ceil(financials.length / pageSize);
  //
  // const [currentPage, handleClick] = usePagination();

  // const mappedData = props?.data?.financials?.map(
  //   ({ fiscalDate, accountsPayable, cashChange, cashFlow }, i) => ({
  //     order: i + 1,
  //     id: Math.ceil(new Date().getTime() * Math.random() * 100),
  //     fiscalDate,
  //     accountsPayable,
  //     cashChange,
  //     cashFlow,
  //   }),
  // );

  // const [data, setData] = useState(mappedData);
  // const [currentData, setCurrentData] = useState(null);
  //
  // const dragStartHandler = (e, data) => {
  //   setCurrentData(data);
  // };

  // const dragEndHandler = e => {
  //   // e.currentTarget.style.background = 'white'
  //   e.currentTarget.style.boxShadow = 'none';
  // };

  // const dragOverHandler = e => {
  //   e.preventDefault();
  //   // e.currentTarget.style.background = '#d5f5f5'
  //   e.currentTarget.style.boxShadow = '0  0 10px 7px rgba(0, 0, 0, .2)';
  //   // '.2em .2em #d5f5f5, -0 .2em 1em .6em #d5f5f5'
  //   // '-6px   -6px    #d4eefa'
  // };
  //

  //   setData(  // const dropHandler = (e, row) => {
  //   //   e.preventDefault();
  //   //
  //   //   // console.log('drop', row);
  //     data.map(d => {
  //       if (d.id === row.id) {
  //         return { ...d, order: currentData.order };
  //       }
  //
  //       if (d.id === currentData.id) {
  //         return { ...d, order: row.order };
  //       }
  //       return d;
  //     }),
  //   );
  //   // e.currentTarget.style.background = 'white'
  //   e.currentTarget.style.boxShadow = 'none';
  // };
  // const sortData = (a, b) => {
  //   if (a.order > b.order) {
  //     return 1;
  //   }
  //   return -1;
  //
  //   // return 0;
  // };

  // const handleClicked = (e, i, pagesCount, currentPage) => {
  //   e.preventDefault();
  //   handleClick(e, i, pagesCount, currentPage);
  // };

  return (
    <>
      {/* <Table bordered hover> */}
      {/*  <thead className={style.head}> */}
      {/*    <tr> */}
      {/*      <th>#</th> */}
      {/*      <th>Fiscal Date</th> */}
      {/*      <th>Accounts Payable</th> */}
      {/*      <th>Cash Change</th> */}
      {/*      <th>Cash Flow</th> */}
      {/*    </tr> */}
      {/*  </thead> */}
      {/*  {financials */}
      {/*    .slice( */}
      {/*      currentPage * pageSize, */}
      {/*      (currentPage + 1) * pageSize, */}
      {/*      // (currentPage-1) *props.pages.pageSize + 1, */}
      {/*    ) */}
      {/*    .sort(sortData) */}
      {/*    .map((data, i) => ( */}
      {/*      <tbody */}
      {/*        key={i} */}
      {/*        className={style.active} */}
      {/*        draggable */}
      {/*        onDragEnd={e => dragEndHandler(e)} */}
      {/*        onDragLeave={e => dragEndHandler(e)} */}
      {/*        onDragOver={e => dragOverHandler(e)} */}
      {/*        onDragStart={e => dragStartHandler(e, data)} */}
      {/*        onDrop={e => dropHandler(e, data)} */}
      {/*        role="presentation" */}
      {/*      > */}
      {/*        <tr> */}
      {/*          <th scope="row"> */}
      {/*            {currentPage * props.pages.pageSize + (i + 1)} */}
      {/*          </th> */}
      {/*          <td>{data.fiscalDate}</td> */}
      {/*          <td>{data.accountsPayable} </td> */}
      {/*          <td>{data.cashChange} </td> */}
      {/*          <td>{data.cashFlow} </td> */}
      {/*        </tr> */}
      {/*      </tbody> */}
      {/*    ))} */}
      {/* </Table> */}

      <Pagination aria-label="Page navigation">
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink first onClick={handleClick} />{' '}
        </PaginationItem>

        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink onClick={handleClick} previous />
        </PaginationItem>

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem key={`${page}${i}`} active={i === currentPage}>
            <PaginationLink onClick={e => handleClick(e, i)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink next onClick={handleClick} />
        </PaginationItem>

        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink last onClick={handleClick} />
        </PaginationItem>
      </Pagination>
    </>
  );
};

ComponentPagination.propTypes = {
  pagesCount: PropTypes.number,
  currentPage: PropTypes.number,
  handleClick: PropTypes.func,
};

ComponentPagination.defaultProps = {
  pagesCount: 0,
  currentPage: 0,
  handleClick: () => {},
};

export default ComponentPagination;
