import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentContainer from '../../../../components/ApplicationSteps/ContentContainer';
import CategoryHeader from '../CategoryHeader';
import QuestionAndAnswer from '../QuestionAndAnswer';
import styles from './LaptopStipend.module.css';
import Button from '../../../../components/Button';
import { BackArrow, RightArrow } from '../../../../assets';
import { laptopConstants } from '../../constants';
import Quote from '../../../../components/Quote';
import { isApplicationFilled } from '../checkStipendApplication';
import { back, progress, reason, steps, benefits, futureHelp } from '../../../../store/reducers/ApplicationReducer';
const { TITLE, SUPPORT_TYPE, QUOTE, QUESTION1, QUESTION2, QUESTION3, QUESTION4, FOOT_NOTE1, FOOT_NOTE2, FOOT_NOTE3, FOOT_NOTE4 } = laptopConstants;

export const LaptopStipend = () => {
  const dispatch = useDispatch();
  const { reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser } = useSelector(state => state.application)

  //check if each of the form values are at least > 4, enable the continue button if true
  const isTrue = isApplicationFilled(reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser)

  return (
    <div className={styles.stipend}>
      <ContentContainer>
        <section className={styles.main}>
          <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
          <QuestionAndAnswer
            value={reasonForRequest}
            dispatchType={reason}
            number={1}
            question={QUESTION1}
          />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer
            value={stepsTakenToEaseProblem}
            dispatchType={steps}
            number={2}
            question={QUESTION2}
          />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE2}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer
            value={potentialBenefits}
            dispatchType={benefits}
            number={3}
            question={QUESTION3}
          />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE3}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer
            value={futureHelpFromUser}
            dispatchType={futureHelp}
            number={4}
            question={QUESTION4}
          />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE4}</p>
        <div className={styles.buttonContainer}>
          <Button label={'Back'} icon={BackArrow} iconPosition={'back'} type={'plain'} onClick={() => dispatch(back())} className={styles.button} />
          <Button disabled={isTrue ? false : true} label={'Continue'} icon={RightArrow} type={'secondary'} onClick={() => dispatch(progress())} className={styles.button} />
        </div>
      </ContentContainer>
      <div className='quoteContainer'>
        <Quote content={QUOTE} className='quote' />
      </div>
    </div>
  );
};
