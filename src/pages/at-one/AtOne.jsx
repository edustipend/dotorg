import React from 'react';
import Achievement from '../../sections/Achievement';
import Timelines from '../../sections/Timelines';
import Request from '../../sections/Request';
import { TestId } from './constants';

export const AtOne = () => {
  return (
    <main data-testid={TestId.AT_ONE}>
      <Achievement />
      <Timelines />
      <Request />
    </main>
  );
};
