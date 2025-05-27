import React from 'react';
import { Path } from './internals/path/Path';
import { Faq } from './internals/faq/Faq';
import { Ready } from './internals/ready/Ready';

export const ImpactLeaders = () => {
  return (
    <main>
      <Path />
      <Faq />
      <Ready />
    </main>
  );
};
