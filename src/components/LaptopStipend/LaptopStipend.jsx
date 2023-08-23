import React from 'react'
import ContentContainer from '../../sections/ApplicationSteps/Internals/ContentContainer'
import CategoryHeader from '../RequestApplication/CategoryHeader'
import QuestionAndAnswer from '../RequestApplication/QuestionAndAnswer'
import styles from './LaptopStipend.module.css'
import { laptopConstants } from './Internals/constants'
const { TITLE, SUPPORT_TYPE, QUESTION1, FOOT_NOTE1 } = laptopConstants

export const LaptopStipend = () => {
  return (
    <div className={styles.laptopStipend}>
      <ContentContainer>
        <section className={styles.main}>
          <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
          <QuestionAndAnswer number={1} question={QUESTION1} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer number={2} question={QUESTION1} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer number={3} question={QUESTION1} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>

      <ContentContainer>
        <section className={styles.main}>
          <QuestionAndAnswer number={4} question={QUESTION1} />
        </section>
        <p className={styles.footNote}>{FOOT_NOTE1}</p>
      </ContentContainer>
    </div>
  )
}
