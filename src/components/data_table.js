import React from 'react';
import PropTypes from 'prop-types';

import TableComponent from '../container/table';

const DataTable = ({ data, pages }) => (
  <>
    <h2> Symbol: AAPL </h2>
    <TableComponent data={data} pages={pages} />
  </>
);

DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  //   data: PropTypes.oneOfType([
  //     PropTypes.shape({
  //       financials: PropTypes.number,
  //       fiscalDate: PropTypes.number,
  //       accountsPayable: PropTypes.number,
  //       cashChange: PropTypes.number,
  //       cashFlow: PropTypes.number,
  //     })
  //   ]) .isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default DataTable;
