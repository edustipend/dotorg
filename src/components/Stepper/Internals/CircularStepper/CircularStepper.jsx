import React, { useState } from 'react';
import styles from '../CircularStepper/CircularStepper..module.css';

const CircularBar = () => {
  const [step, /**setStep**/] = useState(1);

  const steps = [
    { number: 1, label: 'Step 1' },
    { number: 2, label: 'Step 2' },
    { number: 3, label: 'Step 3' },
    { number: 4, label: 'Step 4' },
    { number: 5, label: 'Step 5' }
  ];
  
  const radius = 15;
  const circleWidth = 50;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = ((step) / steps.length) * -2 * Math.PI * radius;

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
          transform='rotate(-90) translate(-50)'
        />

        <text 
          x="50%" 
          y="50%" 
          dy="0.3em" 
          textAnchor="middle"
          className={styles.circletext}
          >
          {step}/{steps.length}
        </text>
      </svg>
      
    </div>
  );
};

export default CircularBar;
