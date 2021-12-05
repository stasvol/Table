import React from 'react';
import PropTypes from 'prop-types';

import ComponentPagination from '../pagination/componentPagination';

const DataTable = ({ data, pages }) => (
  <>
    <h2> Symbol: AAPL </h2>
    <ComponentPagination data={data} pages={pages} />
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
