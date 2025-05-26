import React from 'react';
import ImpactProgramBenefits from '../../sections/Impacts/internals/ImpactProgramBenefits';
import ImpactResponsibilities from '../../sections/Impacts/internals/ImpactResponsibilities';
import ImpactHeroSection from '../../sections/Impacts/internals/ImpactHeroSection';

export const ImpactLeaders = () => {
  return (
    <div>
      <ImpactHeroSection />
      <ImpactProgramBenefits />
      <ImpactResponsibilities />
    </div>
  );
};
