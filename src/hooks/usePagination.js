import { useState } from 'react';

export const usePagination = (initState = 0) => {
  const [currentPage, setCurrentPage] = useState(initState);

  const handleClicked = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };
  const handleClick = (e, i, pagesCount, currentPage) => {
    e.preventDefault();
    handleClicked(e, i, pagesCount, currentPage);
  };

  return [currentPage, handleClick];
};
