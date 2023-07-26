import React, { useState } from 'react';
import styles from '../CircularStepper/CircularStepper..module.css';
import { steps } from '../../constants';
import { radius } from '../../constants';
import { circleWidth } from '../../constants';
import { dashArray } from '../../constants';

const CircularBar = () => {
  const [step /**setStep**/] = useState(1);
  const dashOffset = (step / steps.length) * -2 * Math.PI * radius;

  return (
    <div data-testid="circular stepper" className={styles.container}>
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
          {step}/{steps.length}
        </text>
      </svg>
    </div>
  );
};

export default CircularBar;
