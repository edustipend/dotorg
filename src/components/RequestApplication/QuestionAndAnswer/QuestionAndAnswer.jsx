import React from 'react'
import PropTypes from 'prop-types';
import styles from './QuestionAndAnswer.module.css'

export const QuestionAndAnswer = ({ number, question, className, ...props }) => {
    return (
        <div className={styles.main}>
            <label htmlFor="question" className={styles.label}>
                {number}.
                <p className={styles.question}>
                    {question}
                    <span className={styles.required}>*</span>
                </p>
            </label>
            <textarea
                name="question"
                id="question"
                cols="30" rows="10"
                {...props}
                className={`${styles.textarea} ${className}`}
            />
        </div>
    )
}

QuestionAndAnswer.propTypes = {
    className: PropTypes.string,
    number: PropTypes.number,
    question: PropTypes.string
}

QuestionAndAnswer.defaultProps = {
    className: '',
    number: 1,
    question: 'Default question'
}