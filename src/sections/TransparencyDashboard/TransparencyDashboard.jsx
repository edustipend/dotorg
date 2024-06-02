import Container from '../../components/Container';
import { DonationsFilter } from './internals/DonationsFilter';
import styles from './TransparencyDashboard.module.css';

export const TransparencyDashboard = () => {
  return (
    <div className={styles.container}>
      <Container>
        <DonationsFilter />
      </Container>
    </div>
  );
};
