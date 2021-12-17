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
  data: PropTypes.array.isRequired,
  pages: PropTypes.object.isRequired,
  pagesCount: PropTypes.number,
  mappedData: PropTypes.object.isRequired,
};

DataTable.defaultProps = {
  pagesCount: 0,
};

export default DataTable;
