import React from 'react';
import { Path } from './internals/path/Path';
import { Faq } from './internals/faq/Faq';
import { Ready } from './internals/ready/Ready';
import ImpactProgramOverview from '../../sections/Impacts/internals/ImpactProgramOverview';
import ImpactHeroSection from '../../sections/Impacts/internals/ImpactHeroSection';

export const ImpactLeaders = () => {
  return (
    <main>
      <ImpactHeroSection />
      <ImpactProgramOverview />
      <Path />
      <Faq />
      <Ready />
    </main>
  );
};
