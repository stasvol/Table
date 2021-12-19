import React, { memo } from 'react';
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
  data: PropTypes.shape({
    financials: PropTypes.array,
  }).isRequired,
  pages: PropTypes.object.isRequired,
  pagesCount: PropTypes.number,
  mappedData: PropTypes.array,
};

DataTable.defaultProps = {
  pagesCount: 0,
  mappedData: [],
};

export default memo(DataTable);
