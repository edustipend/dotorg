import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import { progress } from '../../constants';
import { Container } from '../../../Container/ContainerComponent';

const HorizontalStepper = () => {
  return (
    <Container>
      <div data-testid="horizontal stepper"  className={styles.container}>
        {progress.map((item, index) => {
          const isFirstStep = index === 0;
          const isLastStep = index === progress.length - 1;
          const currentStep = index + 1;
          const activeSteps = Math.min(currentStep, 2); 

          return (
            <div key={item.id} className={styles.progressmain}>
              <div className={styles.progress}>
                <p className={isFirstStep ? styles.step : styles.disabledstep}>{item.step}</p>

                <div
                  className={
                    isFirstStep
                      ? styles.transparentcircle
                      : isLastStep
                      ? styles.disabledtransparentcircle
                      : styles.transparentcircle
                  }
                >
                  <div
                    className={
                      isFirstStep
                        ? styles.colouredcircle
                        : isLastStep
                        ? styles.disabledcolouredcircle
                        : styles.colouredcircle
                    }
                    style={{
                      width: isFirstStep ? `${activeSteps * 20}px` : '0',
                      height: isFirstStep ? `${activeSteps * 20}px` : '0',
                    }}
                  />
                </div>

                <p className={isFirstStep ? styles.select : styles.disabledselect}>{item.select}</p>
              </div>
              <div className={styles.gaparrow}>{!isLastStep && <div>{item.arrow}</div>}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HorizontalStepper;
