import React, { useState } from 'react';
import styles from './Stepper.module.css';
import backarrow from '../../assets/stepperbackarrow.svg';
import CircularStepper from './Internals/CircularStepper/CircularStepper';
import HorizontalStepper from './Internals/HorizontalStepper/HorizontalStepper';
import { Text, stepsData } from './constants';

const Stepper = () => {
  const [activeStep /**setActiveStep**/] = useState(1);

  return (
    <>
      <div className={styles.mobile}>
        <div className={styles.container}>
          <div className={styles.backarrow}>
            <img data-testid="backarrow" className={styles.backarrowimg} src={backarrow} alt="back" />
            <p className={styles.backarrowtext}>{Text.BACK_ICON_TEXT}</p>
          </div>

          <div className={styles.circletext}>
            <CircularStepper activeStep={activeStep} stepsData={stepsData} />

            <div className={styles.texts}>
              <p data-testid="step 1" className={styles.step}>
                {Text.TITLE + ' ' + activeStep}
              </p>
              <p data-testid="select stipend category" className={styles.select}>
                {stepsData[activeStep - 1].select}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bigscreen}>
        <HorizontalStepper activeStep={activeStep} stepsData={stepsData} />
      </div>
    </>
  );
};

export default Stepper;
