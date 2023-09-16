import React from 'react';
import './styles.css';
import { About } from './internals/About';
import { TopSection } from './internals/TopSection';
import { Eligibility } from './internals/Eligibility';
import { Benefits } from './internals/Benefits';
import { Application } from './internals/Request';
import { NavHashLink } from 'react-router-hash-link';
import { Button } from '../../components/Button/Button';

const ApplyNowCTA = () => {
  return (
    <div className="apply-now">
      <h3 className="page-subheader">
        We want to inspire people to pursue development in their chosen careers and build the confidence to pay it forward.
      </h3>
      <NavHashLink
        to={{
          pathname: '/ambassador-program',
          hash: '#apply-now'
        }}>
        <Button label={'Apply Now'} type={'secondary'} />
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
      <ApplyNowCTA />
      <Benefits />
      <Application />
    </main>
  );
};
