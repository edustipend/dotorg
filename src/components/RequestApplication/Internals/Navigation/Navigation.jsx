import React from 'react';
import Button from '../../../Button';
import { BackArrow, RightArrow } from '../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { isApplicationFilled } from '../checkStipendApplication';
import { back, progress } from '../../../../store/reducers/ApplicationReducer';

import styles from '../LaptopStipend/LaptopStipend.module.css';

export const Navigation = () => {
  const dispatch = useDispatch();
  const { reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector((state) => state.application);
  const { pathname } = useLocation();

  //check if each of the form values are at least > 4, enable the continue button if true
  const isTrue = isApplicationFilled(reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser);
  const isDashboard = pathname.includes('/dashboard');

  return (
    !isDashboard && (
      <div className={styles.buttonContainer}>
        <Button label={'Back'} icon={BackArrow} iconPosition={'back'} type={'plain'} onClick={() => dispatch(back())} className={styles.button} />
        <Button
          disabled={isTrue ? false : true}
          label={'Continue'}
          icon={RightArrow}
          type={'secondary'}
          onClick={() => dispatch(progress())}
          className={styles.button}
        />
      </div>
    )
  );
};
