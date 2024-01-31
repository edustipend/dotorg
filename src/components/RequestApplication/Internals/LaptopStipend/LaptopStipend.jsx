import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { constant, laptopConstants } from '../../constants';
import { reason, steps, benefits, futureHelp, setDisableTextbox } from '../../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../../utils';
import Quote from '../../../../components/Quote';
import Navigation from '../Navigation';
import Button from '../../../Button';
import ContentContainer from '../../../../components/ApplicationSteps/ContentContainer';
import CategoryHeader from '../CategoryHeader';
import QuestionAndAnswer from '../QuestionAndAnswer';
import styles from './LaptopStipend.module.css';
<<<<<<< HEAD
import Button from '../../../../components/Button';
import { BackArrow, RightArrow } from '../../../../assets';
import { laptopConstants } from '../../constants';
import Quote from '../../../../components/Quote';
import { isApplicationFilled } from '../checkStipendApplication';
import { setActiveStep, back, progress, reason, steps, benefits, futureHelp } from '../../../../store/reducers/ApplicationReducer';
=======
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
const { TITLE, SUPPORT_TYPE, QUOTE, QUESTION1, QUESTION2, QUESTION3, QUESTION4, FOOT_NOTE1, FOOT_NOTE2, FOOT_NOTE3, FOOT_NOTE4 } = laptopConstants;

export const LaptopStipend = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');
  const dispatch = useDispatch();
<<<<<<< HEAD
  const { newApplication, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector(
    (state) => state.application
  );

  //check if each of the form values are at least > 4, enable the continue button if true
  const isTrue = isApplicationFilled(reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser);
  const handleAction = () => {
    if (newApplication) {
      dispatch(setActiveStep(5));
    } else {
      dispatch(progress());
    }
  };
=======
  const [showUnderReview, setShowUnderReview] = useState(false);
  const [showBtn, setShowBtn] = useState(isDashboard);
  const { reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector((state) => state.application);

  const handleEditApplication = () => {
    setShowBtn((prev) => !prev);
    const isWindowClosed = isApplicationWindowClosed();
    isWindowClosed ? setShowUnderReview(true) : dispatch(setDisableTextbox(false));
  };

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
  return (
    <div className={styles.stipend}>
      <ContentContainer>
        <section className={styles.main}>
          <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
          <QuestionAndAnswer value={reasonForRequest} dispatchType={reason} number={1} question={QUESTION1} />
          {showUnderReview && (
            <div className={styles.review}>
              <p>{constant.UNDER_REVIEW}</p>
            </div>
          )}
          {showBtn && (
            <div className={styles.btnContainer}>
              <Button label={'Edit Application'} type={'secondary'} effectAlt onClick={handleEditApplication} />
            </div>
          )}
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer value={stepsTakenToEaseProblem} dispatchType={steps} number={2} question={QUESTION2} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE2}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer value={potentialBenefits} dispatchType={benefits} number={3} question={QUESTION3} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE3}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer value={futureHelpFromUser} dispatchType={futureHelp} number={4} question={QUESTION4} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE4}</p>
<<<<<<< HEAD
        <div className={styles.buttonContainer}>
          <Button label={'Back'} icon={BackArrow} iconPosition={'back'} type={'plain'} onClick={() => dispatch(back())} className={styles.button} />
          <Button
            disabled={isTrue ? false : true}
            label={'Continue'}
            icon={RightArrow}
            type={'secondary'}
            onClick={handleAction}
            className={styles.button}
          />
        </div>
=======
        <Navigation />
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
      </ContentContainer>
      <div className="quoteContainer">
        <Quote content={QUOTE} className="quote" />
      </div>
    </div>
  );
};
