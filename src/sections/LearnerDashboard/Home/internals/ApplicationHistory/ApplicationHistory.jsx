import React from 'react';
import Table from '../../../../../components/Table';
import { history, tableHead } from '../constants';

export const ApplicationHistory = () => {
  return (
    <>
      <Table entries={history} tableHead={tableHead} />
    </>
  );
};
