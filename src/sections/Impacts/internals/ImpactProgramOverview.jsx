import React from 'react';
import Container from '../../../components/Container';
import { leadershipCallToAction } from '../constants';

import styles from '../impacts.module.css';

const ImpactProgramOverview = () => {
  return (
    <Container>
      <section className={styles.leadershipContainer}>
        <div className={styles.leadershipOverview}>
          <label className={styles.leadershipLabel}>Program Overview</label>
          <h2 className={styles.programOverviewTitle}>{leadershipCallToAction.CALL_TO_ACTION_TITLE}</h2>
        </div>

        <div className={styles.impactProgramOverviewInfos}>
          <div className={styles.leadershipTexts}>
            <p className={styles.leadershipText}>{leadershipCallToAction.PARAGRAPH_ONE}</p>
            <p className={styles.leadershipText}>{leadershipCallToAction.PARAGRAPH_TWO}</p>
          </div>

          <div className={styles.leadershipTimeline}>
            <p>
              <span className={styles.timelineEmphasis}> {leadershipCallToAction.TIMELINE_ONE} </span> {leadershipCallToAction.APPLICATION_START_DATE}
            </p>
            <p>
              <span className={styles.timelineEmphasis}> {leadershipCallToAction.TIMELINE_TWO} </span> {leadershipCallToAction.APPLICATOIN_END_DATE}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ImpactProgramOverview;
