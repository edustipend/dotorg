import React from 'react';
import './styles.css';
import { About } from './internals/About';
import { TopSection } from './internals/TopSection';
import { Eligibility } from './internals/Eligibility';
import { Benefits } from './internals/Benefits';
import { Application } from './internals/Request';
import { NavHashLink } from 'react-router-hash-link';
// import { Requirements } from './internals/Requirements';
import Button from '../../components/Button';
import Header from '../../components/Header';
import { AmbsImpacts } from './internals/AmbsImpacts';

const ApplyNowCTA = () => {
  return (
    <div className="apply-now">
      <Header className="text" size="small">
        Ready to Make an Impact? <br /> Become an Edustipend <span className="header-abs">Ambassador</span> Today
      </Header>

      <NavHashLink
        to={{
          pathname: '/ambassador-program',
          hash: '#apply-now'
        }}>
        <Button label={'Apply Now'} type="secondary" />
      </NavHashLink>
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
