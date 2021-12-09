import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ComponentPagination = ({ pagesCount, currentPage, handleClick }) => (
  <Pagination aria-label="Page navigation">
    <PaginationItem disabled={currentPage <= 0}>
      <PaginationLink
        first
        onClick={e => handleClick(e, currentPage - currentPage)}
      />
    </PaginationItem>

    <PaginationItem disabled={currentPage <= 0}>
      <PaginationLink onClick={e => handleClick(e, currentPage - 1)} previous />
    </PaginationItem>

    {[...Array(pagesCount)].map((page, i) => (
      <PaginationItem key={`${page}${i}`} active={i === currentPage}>
        <PaginationLink onClick={e => handleClick(e, i)}>
          {i + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem disabled={currentPage >= pagesCount - 1}>
      <PaginationLink next onClick={e => handleClick(e, currentPage + 1)} />
    </PaginationItem>

    <PaginationItem disabled={currentPage >= pagesCount - 1}>
      <PaginationLink last onClick={e => handleClick(e, pagesCount - 1)} />
    </PaginationItem>
  </Pagination>
);

ComponentPagination.propTypes = {
  pagesCount: PropTypes.number,
  currentPage: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
};

ComponentPagination.defaultProps = {
  pagesCount: 0,
  currentPage: 0,
};

export default ComponentPagination;
