import React from 'react';
import './styles.css';
import { About } from './internals/About';
import { TopSection } from './internals/TopSection';
import { Eligibility } from './internals/Eligibility';
import { Benefits } from './internals/Benefits';
import { Application } from './internals/Request';
import { NavHashLink } from 'react-router-hash-link';
import { Requirements } from './internals/Requirements';
import Button from '../../components/Button';
import Text from '../../components/Text';
// import Carousel from '../../components/Carousel/Carousel';

const ApplyNowCTA = () => {
  return (
    <div className="apply-now">
      <Text
        className="page-subheader"
        content="  We want to inspire people to pursue development in their chosen careers and build the confidence to pay it forward."
      />

      <NavHashLink
        // style={{
        //   fontSize: '1.2rem',
        //   minWidth: 120
        // }}
        // className="nav-cta"
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
      <Requirements />
      <ApplyNowCTA />
      <Benefits />
      {/* <Carousel /> */}
      <Application />
    </main>
  );
};
