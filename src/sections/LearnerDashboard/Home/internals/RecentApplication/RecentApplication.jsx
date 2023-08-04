import React from 'react';
import Table from '../../../../../components/Table';
import { recent } from '../constants';

export const RecentApplication = () => {
  return (
    <>
      <Table entries={recent} />
    </>
  );
};
