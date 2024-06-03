import Container from '../../components/Container';
import { DashboardTimelines } from './internals';

import styles from './Transparency.module.css';

export const TransparencyDashboard = () => {
  return (
    <div className={styles.container}>
      <Container>
        <DashboardTimelines />
      </Container>
    </div>
  );
};
