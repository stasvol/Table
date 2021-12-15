import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const useTableSelectors = () => {
  const data = useSelector(({ data }) => data.data);
  const pages = useSelector(({ pages }) => pages);
  const pagesCount = useMemo(
    () => Math.ceil(data.financials?.length / pages.pageSize),
    [data, pages],
  );
  const mappedData = useMemo(
    () =>
      data.financials?.map(
        ({ fiscalDate, accountsPayable, cashChange, cashFlow }, i) => ({
          order: i + 1,
          id: Math.ceil(new Date().getTime() * Math.random() * 100),
          fiscalDate,
          accountsPayable,
          cashChange,
          cashFlow,
        }),
      ),
    [data],
  );

  return { data, pages, pagesCount, mappedData };
};
