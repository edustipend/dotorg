import { useEffect, useState } from 'react';
import styles from '../Supports.module.css';
import PropTypes from 'prop-types';

const Progress = ({ raised, max }) => {
  const percentageRaised = (raised / max) * 100;

  const [dynamicPercentage, setDynamicPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dynamicPercentage < percentageRaised) {
        setDynamicPercentage(dynamicPercentage + 1);
      } else {
        setDynamicPercentage(dynamicPercentage - 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [dynamicPercentage, percentageRaised]);

  const progressStyle = {
    '--progress': `${dynamicPercentage}%`
  };

  return (
    <div className={`${styles.progress} ${styles.dynamic}`} style={progressStyle}>
      <div className={styles.doughnut}></div>
      <div className={styles.fill}></div> {/* This div will show the progress */}
      <div className={styles.text}>{`${raised} `}</div>
    </div>
  );
};

Progress.propTypes = {
  raised: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default Progress;
