import React from 'react';
import styles from './impacts.module.css';
import Container from '../../components/Container';
import BreadCrumbs from '../../components/BreadCrumbs';
import { paths } from './constants';
import OurImpacts from './internals/OurImpacts';
import PartnerWithUs from './internals/PartnerWithUs';

const Impacts = () => {
  return (
    <>
      <div className={styles.container}>
        <Container>
          <div className={styles.wrapper}>
            <BreadCrumbs paths={paths} />
            <OurImpacts />
          </div>
        </Container>
      </div>
      <PartnerWithUs />
    </>
  );
};

export default Impacts;
