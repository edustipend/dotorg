import React from 'react';
import styles from './Stepper.module.css';
import backarrow from '../../assets/stepperbackarrow.svg';
import CircularStepper from './Internals/CircularStepper/CircularStepper';
import HorizontalStepper from './Internals/HorizontalStepper/HorizontalStepper';

const Stepper = () => {
  return (
    <>
      <div className={styles.mobile}>
        {/* Mobile Circular Stepper */}
        <div className={styles.container}>
          <div className={styles.backarrow}>
            <img data-testid="backarrow" className={styles.backarrowimg} src={backarrow} alt="back" />
            <p className={styles.backarrowtext}>Back</p>
          </div>

          <div className={styles.circletext}>
            <CircularStepper />

            <div className={styles.texts}>
              <p data-testid="step 1" className={styles.step}>Step 1</p>
              <p data-testid="select stipend category" className={styles.select}>Select Stipend Category</p>
            </div>
          </div>
        </div>
        <div data-testid="line" className={styles.line}></div>
      </div>
      {/* Big Screen Horizontal Stepper */}
      <div className={styles.bigscreen}>
        <HorizontalStepper />
      </div>
    </>
  );
};

export default Stepper;
