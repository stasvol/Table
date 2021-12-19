import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ComponentPagination = ({ pagesCount, currentPage, handleClick }) => {
  const firstClick = e => handleClick(e, currentPage - currentPage);
  const previousClick = e => handleClick(e, currentPage - 1);
  const nextClick = e => handleClick(e, currentPage + 1);
  const lastClick = e => handleClick(e, pagesCount - 1);
  const endFirstPages = currentPage <= 0;
  const endLastPages = currentPage >= pagesCount - 1;

  return (
    <Pagination aria-label="Page navigation">
      <PaginationItem disabled={endFirstPages}>
        <PaginationLink first onClick={firstClick} />
      </PaginationItem>

      <PaginationItem disabled={endFirstPages}>
        <PaginationLink onClick={previousClick} previous />
      </PaginationItem>

      {[...Array(pagesCount)].map((page, i) => {
        const pagesClick = e => handleClick(e, i);
        return (
          <PaginationItem key={`${page}${i}`} active={i === currentPage}>
            <PaginationLink onClick={pagesClick}>{i + 1}</PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={endLastPages}>
        <PaginationLink next onClick={nextClick} />
      </PaginationItem>

      <PaginationItem disabled={endLastPages}>
        <PaginationLink last onClick={lastClick} />
      </PaginationItem>
    </Pagination>
  );
};

ComponentPagination.propTypes = {
  pagesCount: PropTypes.number,
  currentPage: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
};

ComponentPagination.defaultProps = {
  pagesCount: 0,
  currentPage: 0,
};

export default memo(ComponentPagination);
