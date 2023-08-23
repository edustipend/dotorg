import React from 'react'
import { useDispatch } from 'react-redux';
import styles from '../LaptopStipend/LaptopStipend.module.css'
import ContentContainer from '../../../sections/ApplicationSteps/Internals/ContentContainer';
import Button from '../../Button'
import { courseConstants } from './Internals/constants'
import { BackArrow, RightArrow } from '../../../assets';
import CategoryHeader from '../CategoryHeader'
import QuestionAndAnswer from '../QuestionAndAnswer'
import Quote from '../../Quote'
import { back, progress } from '../../../redux/RequestApplication/RequestApplication'
const { TITLE, SUPPORT_TYPE, FOOT_NOTE1, FOOT_NOTE2, FOOT_NOTE3, FOOT_NOTE4, QUESTION1, QUESTION2, QUESTION3, QUESTION4, QUOTE } = courseConstants

export const CourseStipend = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.stipend}>
            <ContentContainer>
                <section className={styles.main}>
                    <CategoryHeader header={TITLE} category={TITLE} support={SUPPORT_TYPE} />
                    <QuestionAndAnswer number={1} question={QUESTION1} />
                </section>
                <p className={styles.footNote}>{FOOT_NOTE1}</p>
            </ContentContainer>

            <ContentContainer>
                <section className={styles.main}>
                    <QuestionAndAnswer number={2} question={QUESTION2} />
                </section>
                <p className={styles.footNote}>{FOOT_NOTE2}</p>
            </ContentContainer>

            <ContentContainer>
                <section className={styles.main}>
                    <QuestionAndAnswer number={3} question={QUESTION3} />
                </section>
                <p className={styles.footNote}>{FOOT_NOTE3}</p>
            </ContentContainer>

            <ContentContainer>
                <section className={styles.main}>
                    <QuestionAndAnswer number={4} question={QUESTION4} />
                </section>
                <p className={styles.footNote}>{FOOT_NOTE4}</p>
                <div className={styles.buttonContainer}>
                    <Button
                        label={'Back'}
                        icon={BackArrow}
                        iconPosition={'back'}
                        type={'plain'}
                        onClick={() => dispatch(back())}
                        className={styles.button}
                    />
                    <Button
                        label={'Continue'}
                        icon={RightArrow}
                        type={'secondary'}
                        onClick={() => dispatch(progress())}
                        className={styles.button}
                    />
                </div>
            </ContentContainer>
            <div className={styles.quoteContainer}>
                <Quote content={QUOTE} className={styles.quote} />
            </div>
        </div>
    )
}
