import React from 'react';
import { formatMoney } from '../../../utils/numberFormatter/formatMoney';
import Target from '../../../components/Cards/Target';
import { TestId, btn, targets } from '../constants';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../TransparencyDashboard.module.css';
import Button from '../../../components/Button';

export const Goals = ({ data, isCampaignActive }) => {
  return (
    <div className={styles.goals} data={data} data-testid={TestId.GOALS_ID}>
      <div className={styles.top}>
        {targets.map((t) => {
          if (t.category === 'goal' && !isCampaignActive) return null;

          const value = t.category === 'goal' ? formatMoney(data?.[t.category]) : data?.[t.category];

          return <Target key={t.category} value={value} category={t.category} icon={t.icon} />;
        })}
      </div>
      <div className={styles.bottom}>
        <div className={styles.progress}>
          <div className={styles.progressTop}>
            <h1>
              {formatMoney(data?.raised)}
              {isCampaignActive && <span> / {formatMoney(data?.goal)}</span>}
            </h1>
            <p>Raised</p>
          </div>

          {isCampaignActive && (
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${data?.completed}%` }}></div>
              </div>
              <p className={styles.completion}>{data?.completed}% complete</p>
            </div>
          )}
        </div>

        <Link to={btn.path} className={styles.link}>
          <Button label={btn.label} type={btn.variant} />
        </Link>
      </div>
    </div>
  );
};

Goals.propTypes = {
  data: PropTypes.object,
  isCampaignActive: PropTypes.bool
};
