import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../LaptopStipend/LaptopStipend.module.css';
import ContentContainer from '../../../../components/ApplicationSteps/ContentContainer';
import { constant, courseConstants } from '../../constants';
import CategoryHeader from '../CategoryHeader';
import QuestionAndAnswer from '../QuestionAndAnswer';
import Quote from '../../../../components/Quote';
import { reason, steps, benefits, futureHelp, setDisableTextbox } from '../../../../store/reducers/ApplicationReducer';
import { isApplicationWindowClosed } from '../../../../utils';
import Navigation from '../Navigation';
import Button from '../../../Button';
const { TITLE, SUPPORT_TYPE, FOOT_NOTE1, FOOT_NOTE2, FOOT_NOTE3, FOOT_NOTE4, QUESTION1, QUESTION2, QUESTION3, QUESTION4, QUOTE } = courseConstants;

export const CourseStipend = () => {
  const dispatch = useDispatch();
  const [showUnderReview, setShowUnderReview] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const { reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector((state) => state.application);

  const handleEditApplication = () => {
    setShowBtn((prev) => !prev);
    const isWindowClosed = isApplicationWindowClosed();
    isWindowClosed ? setShowUnderReview(true) : dispatch(setDisableTextbox(false));
  };

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
        ,<Navigation />
      </ContentContainer>
      <div className={styles.quoteContainer}>
        <Quote content={QUOTE} className={styles.quote} />
      </div>
    </div>
  );
};
