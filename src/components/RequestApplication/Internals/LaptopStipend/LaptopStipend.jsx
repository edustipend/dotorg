import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { constant, TestId, laptopConstants } from '../../constants';
import { reason, steps, benefits, futureHelp, setDisableTextbox } from '../../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../../utils';
import Quote from '../../../../components/Quote';
import Navigation from '../Navigation';
import Button from '../../../Button';
import ContentContainer from '../../../../components/ApplicationSteps/ContentContainer';
import CategoryHeader from '../CategoryHeader';
import QuestionAndAnswer from '../QuestionAndAnswer';
import styles from './LaptopStipend.module.css';
const { TITLE, SUPPORT_TYPE, QUOTE, QUESTION1, QUESTION2, QUESTION3, QUESTION4, FOOT_NOTE1, FOOT_NOTE2, FOOT_NOTE3, FOOT_NOTE4 } = laptopConstants;

export const LaptopStipend = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');
  const dispatch = useDispatch();
  const { reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser, viewBtnLabel, currentApplication } = useSelector(
    (state) => state.application
  );
  const isWindowClosed = isApplicationWindowClosed();

  //check if each of the form values are at least > 4, enable the continue button if true
  const [showUnderReview, setShowUnderReview] = useState(isWindowClosed);
  const [showBtn, setShowBtn] = useState(isDashboard);

  const handleEditApplication = () => {
    setShowBtn((prev) => !prev);
    const isWindowClosed = isApplicationWindowClosed();
    isWindowClosed ? setShowUnderReview(true) : dispatch(setDisableTextbox(false));
  };

  return (
    <div className={styles.stipend} data-testid={TestId.LAPTOP_STIPEND}>
      <ContentContainer>
        <section className={styles.main}>
          <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
          <QuestionAndAnswer value={reasonForRequest} dispatchType={reason} number={1} question={QUESTION1} />
          {showUnderReview && (
            <div className={styles.review}>
              <p className={styles.cap}>{`${constant.UNDER_REVIEW_P1} ${currentApplication?.status || constant.UNDER_REVIEW_DEFAULT} ${
                constant.UNDER_REVIEW_P2
              }`}</p>
            </div>
          )}
          {showBtn && !isWindowClosed && (
            <div className={styles.btnContainer}>
              <Button label={viewBtnLabel} type={'primary'} effectAlt onClick={handleEditApplication} />
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
        <div className={styles.buttonContainer}></div>
        <Navigation />
      </ContentContainer>
      <div className="quoteContainer">
        <Quote content={QUOTE} className="quote" />
      </div>
    </div>
  );
};
