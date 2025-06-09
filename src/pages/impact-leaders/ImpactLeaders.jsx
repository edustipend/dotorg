import React from 'react';
import { Path } from './internals/path/Path';
import { Faq } from './internals/faq/Faq';
import { Ready } from './internals/ready/Ready';
import Terms from './internals/terms/Terms';
import ImpactProgramOverview from '../../sections/Impacts/internals/ImpactProgramOverview';
import ImpactHeroSection from '../../sections/Impacts/internals/ImpactHeroSection';

export const ImpactLeaders = () => {
  return (
    <main>
      <ImpactHeroSection />
      <ImpactProgramOverview />
      <Path />
      <Faq />
      <Terms />
      <Ready />
    </main>
  );
};
