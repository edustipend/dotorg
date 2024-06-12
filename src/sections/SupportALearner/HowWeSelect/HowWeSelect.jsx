import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import { TestId, btnLabel, headText, how, process } from './constants';

import styles from './HowWeSelect.module.css';

export const HowWeSelect = () => {
  return (
    <div className={styles.wrapper} data-testid={TestId.WRAPPER}>
      <Container>
        <div className={styles.headerContainer}>
          <h1 data-testid={TestId.HEAD_TEXT}>{headText}</h1>
        </div>
        <div className={styles.contentWrapper} data-testid={TestId.CONTENTS_CONTAINER}>
          {how.map((h, i) => (
            <div key={h.id} className={i % 2 ? styles.cardAlt : styles.card}>
              <div className={styles.cardTitle}>
                <h1>{h.label}</h1>
                <span>{h.id}</span>
              </div>
              <p>{h.description}</p>
            </div>
          ))}
          <div className={styles.process}>
            <h2>{process}</h2>
            <Link to={btnLabel.path} id="donate-now-page">
              <Button label={btnLabel.label} type={btnLabel.type} dataTest={TestId.SUPPORT_CTA} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
