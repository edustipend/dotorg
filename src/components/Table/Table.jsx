import React, { useEffect, useState } from 'react';
import Table1 from './internals/Table1';
import Table2 from './internals/Table2';
import PropTypes from 'prop-types';

export const Table = ({ entries, tableHead }) => {
  const [windowSize, setWindowSize] = useState(getWidth());
  const { innerWidth } = windowSize;

  function getWidth() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  useEffect(() => {
    const windowResizeListener = () => {
      setWindowSize(getWidth());
    };
    window.addEventListener('resize', windowResizeListener);

    return () => {
      window.removeEventListener('resize', windowResizeListener);
    };
  }, []);

  return <>{innerWidth >= 1024 ? <Table2 entries={entries} tableHead={tableHead} /> : <Table1 entries={entries} tableHead={tableHead} />}</>;
};

Table.propTypes = {
  entries: PropTypes.array,
  tableHead: PropTypes.array
};
Table.defaultProps = {
  entries: [],
  tableHead: []
};
