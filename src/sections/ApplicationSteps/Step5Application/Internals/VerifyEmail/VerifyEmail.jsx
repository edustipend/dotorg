import React from 'react'
import { useSelector } from 'react-redux'
import { useContext } from 'react'
import { ModalContext } from '../../../../../context/ModalContext'
import styles from '../Submit/Submit.module.css'
import Header from '../../../../../components/Header'
import Button from '../../../../../components/Button'
import Quote from '../../../../../components/Quote'
import { constants } from './Internals/constants'
import { PaperPlane, BackArrow } from '../../../../../assets'

const { HEADER, PARA1, PARA2, EMAIL, QUOTE } = constants

export const VerifyEmail = () => {
    const { setIsActive } = useContext(ModalContext)
    const { Email } = useSelector(state => state.userDetails)
    return (
        <div className={styles.submit}>
            <img
                src={BackArrow}
                alt="backArrow"
                onClick={() => setIsActive(prev => !prev)}
                className={styles.arrow}
            />
            <div className='animated'>
                <div className={styles.headerContainer}>
                    <img src={PaperPlane} alt="user-plus" className={styles.emoji} />
                    <Header className={styles.header}>{HEADER}</Header>
                </div>
                <div className={styles.bottomSection}>
                    <p className={styles.prompt}>{PARA1}</p>
                    <p className={styles.userEmail}>{Email}</p>
                    <p className={styles.prompt}>{PARA2}</p>
                    <div className={`${styles.btnContainer} ${styles.btnContainerAlt}`}>
                        <Button
                            type={'secondary'}
                            effectAlt
                            label={EMAIL}
                            className={styles.btn}
                        />
                    </div>
                </div>
                <div className='quoteContainer'>
                    <Quote content={QUOTE} className={styles.Quote} />
                </div>
            </div>
        </div>
    )
}
