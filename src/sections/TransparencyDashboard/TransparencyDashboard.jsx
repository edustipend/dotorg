import React from 'react';
import Container from '../../components/Container';
import BreadCrumbs from '../../components/BreadCrumbs';
import { paths } from './constants';

import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  return (
    <div className={styles.container}>
      <Container>
        <BreadCrumbs paths={paths} />
      </Container>
    </div>
  );
};
