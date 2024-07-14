import React from 'react';
import Table from '../../../../../components/Table';
import { recent, tableHead } from '../constants';

export const RecentApplication = () => {
  return <Table entries={recent} tableHead={tableHead} />;
};
