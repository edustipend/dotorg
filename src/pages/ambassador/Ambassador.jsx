import React from 'react';
import './styles.css';
import { About } from './internals/About';
import { TopSection } from './internals/TopSection';
import { Eligibility } from './internals/Eligibility';
import { Benefits } from './internals/Benefits';
import { Application } from './internals/Request';

import Header from '../../components/Header';
import { AmbsImpacts } from './internals/AmbsImpacts';
import { Texts } from './constant';

const ApplyNowCTA = () => {
  return (
    <div className="apply-now">
      <Header className="text" size="small">
        {Texts.Ready} <br /> {Texts.Become} <span className="header-abs">{Texts.HeaderA}</span> {Texts.Today}
      </Header>
    </div>
  );
};

export const Ambassador = () => {
  return (
    <main>
      <TopSection />
      <About />
      <Eligibility />
      <Benefits />
      <AmbsImpacts />
      <ApplyNowCTA />
      <Application />
    </main>
  );
};
