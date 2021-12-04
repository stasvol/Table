import React from 'react';
import PropTypes from 'prop-types';

import PaginationTable from '../pagination/pagination';

const DataTable = ({ data, pages }) => (
  <>
    <h2>Symbol: AAPL </h2>
    <PaginationTable data={data} pages={pages} />
  </>
);

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
  //   data: PropTypes.oneOfType([
  //     PropTypes.shape({
  //       financials: PropTypes.number,
  //       fiscalDate: PropTypes.number,
  //       accountsPayable: PropTypes.number,
  //       cashChange: PropTypes.number,
  //       cashFlow: PropTypes.number,
  //     })
  //   ]) .isRequired,
  pages: PropTypes.object.isRequired,
};

export default DataTable;
