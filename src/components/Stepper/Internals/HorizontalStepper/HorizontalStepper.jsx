import React from 'react';
import styles from '../HorizontalStepper/HorizontalStepper.module.css';
import { progress } from '../../constants';

const HorizontalStepper = () => {
  return (
   
      <div data-testid="horizontal stepper" className={styles.container}>
        {progress.map((item, index) => {
          return (
            <div key={item.id} className={styles.progressmain}>
              <div className={styles.progress}>
                {item.id === 1 ? <p className={styles.step}>{item.step}</p> : <p className={styles.disabledstep}>{item.step}</p>}

                {item.id === 1 ? (
                  <div className={styles.transparentcircle}>
                    <div className={styles.colouredcircle}></div>
                  </div>
                ) : (
                  <div className={styles.disabledtransparentcircle}>
                    <div className={styles.disabledcolouredcircle}></div>
                  </div>
                )}
                {item.id === 1 ? <p className={styles.select}>{item.select}</p> : <p className={styles.disabledselect}>{item.select}</p>}
              </div>
              <div className={styles.gaparrow}>{index !== progress.length - 1 && <div>{item.arrow}</div>}</div>
            </div>
          );
        })}
      </div>
  );
};

export default HorizontalStepper;