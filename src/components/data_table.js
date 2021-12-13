import React from 'react';
import PropTypes from 'prop-types';

import TableContainer from '../container/tableContainer';

const DataTable = ({ data, pages }) => (
  <>
    <h2> Symbol: AAPL </h2>
    <TableContainer data={data} pages={pages} />
  </>
);

DataTable.propTypes = {
  data: PropTypes.object.isRequired,
  pages: PropTypes.object.isRequired,
};

export default DataTable;
