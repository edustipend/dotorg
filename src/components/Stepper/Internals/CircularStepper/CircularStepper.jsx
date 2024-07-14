import React from 'react';
import styles from '../CircularStepper/CircularStepper.module.css';
import { radius } from '../../constants';
import { circleWidth } from '../../constants';
import { dashArray } from '../../constants';
import PropTypes from 'prop-types';
import { TestId } from '../../constants';

const CircularStepper = ({ activeStep, stepsData }) => {
  const dashOffset = (activeStep / stepsData?.length) * -2 * Math.PI * radius;

  return (
    <div data-testid={TestId.CIRCULAR_STEPPER_TEST_ID} className={styles.container}>
      <svg width="80" height="80" viewBox={`7 0 ${circleWidth} ${circleWidth}`} className={styles.circle}>
        <circle cx={circleWidth / 2} cy={circleWidth / 2} strokeWidth="4px" r={radius} className={styles.circlebackground} />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="4px"
          r={radius}
          className={styles.circleprogress}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
          transform="rotate(-90) translate(-50)"
        />

        <text x="50%" y="50%" dy="0.3em" textAnchor="middle" className={styles.circletext}>
          {activeStep}/{stepsData?.length}
        </text>
      </svg>
    </div>
  );
};

CircularStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  ).isRequired,
  stepsDataLength: PropTypes.number.isRequired
};

CircularStepper.defaultProps = {
  activeStep: 1,
  stepsData: [],
  stepsDataLength: 0
};

export default CircularStepper;
