import { useCallback, useState } from 'react';

export const usePagination = (initState = 0) => {
  const [currentPage, setCurrentPage] = useState(initState);

  const handleClicked = useCallback(
    (e, index) => {
      e.preventDefault();
      setCurrentPage(index);
    },
    [setCurrentPage],
  );

  const handleClick = useCallback(
    (e, pagesCount, currentPage) => {
      e.preventDefault();
      handleClicked(e, pagesCount, currentPage);
    },
    [handleClicked],
  );

  return [currentPage, handleClick];
};
