import { useState } from 'react';

export const usePagination = (initState = 0) => {
  const [currentPage, setCurrentPage] = useState(initState);

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentPage(index);
  };
  return [currentPage, handleClick];
};
