import React from 'react';
import styles from '../CircularStepper/CircularStepper.module.css';
import { radius } from '../../constants';
import { circleWidth } from '../../constants';
import { dashArray } from '../../constants';
import PropTypes from 'prop-types';
import { TestId } from '../../constants';
import { useSelector } from 'react-redux';

const CircularStepper = ({ activeStep, stepsData }) => {
  const finalStep = 3;
  const { newApplication } = useSelector((state) => state.application) || {};

  //set the step length based on the current application mode (returning users or new users )
  const calculateLength = () => {
    if (newApplication) {
      return finalStep;
    } else {
      return stepsData?.length;
    }
  };

  //set the active step based on the current application mode (returning users or new users )
  const calculateActiveStep = () => {
    if (newApplication && activeStep === 5) {
      return finalStep;
    } else {
      return activeStep;
    }
  };
  const useLength = calculateLength();
  const useStep = calculateActiveStep();

  const dashOffset = (useStep / useLength) * -2 * Math.PI * radius;
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
          {useStep}/{useLength}
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
