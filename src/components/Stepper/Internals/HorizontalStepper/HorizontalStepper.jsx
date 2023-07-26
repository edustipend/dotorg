import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import HorizontalStep from './HorizontalStep';
import PropTypes from 'prop-types';

const HorizontalStepper = ({ activeStep, stepsData }) => {
  return (
    <div data-testid="horizontal stepper" className={styles.container}>
      {stepsData.map((step, index) => (
        <HorizontalStep key={index} stepsData={stepsData} step={step} active={activeStep === step.id} />
      ))}
    </div>
  );
};

HorizontalStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      step: PropTypes.string.isRequired,
      select: PropTypes.string.isRequired,
      arrow: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HorizontalStepper;
