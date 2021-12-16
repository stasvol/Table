import React from 'react';
import PropTypes from 'prop-types';

import TableContainer from '../container/tableContainer';

const DataTable = ({ data, pages, pagesCount, mappedData }) => (
  <>
    <h2> Symbol: AAPL </h2>
    <TableContainer
      data={data}
      mappedData={mappedData}
      pages={pages}
      pagesCount={pagesCount}
    />
  </>
);

DataTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
  pages: PropTypes.object.isRequired,
  pagesCount: PropTypes.number.isRequired,
  mappedData: PropTypes.object.isRequired,
};

export default DataTable;
