import React from 'react';
import './styles.css';
import { About } from './internals/About';
import { TopSection } from './internals/TopSection';
import { Eligibility } from './internals/Eligibility';
import { Benefits } from './internals/Benefits';
import { Application } from './internals/Request';
import Header from '../../components/Header';
import { AmbsImpacts } from './internals/AmbsImpacts';
<<<<<<< HEAD
=======
import { Texts } from './constant';
>>>>>>> 5690207569507f949c7cc025f037030b8066414d

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
