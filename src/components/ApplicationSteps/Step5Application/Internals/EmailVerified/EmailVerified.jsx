import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../../../../context/ModalContext'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../Submit/Submit.module.css'
import Modal from '../../../../Modal'
import Button from '../../../../Button'
import Header from '../../../../Header'
import Loader from '../../../../Loader'
import { Valid } from '../../../../../assets'
import { constants } from './constants'
import ContentContainer from '../../../ContentContainer'
import { emailVerification } from '../../../../../store/reducers/ApplicationReducer'
const { HEADER, ERR_HEADER, SUCCESS_BTN, ERR_BTN } = constants

export const EmailVerified = () => {
    const { setIsActive } = useContext(ModalContext)
    const dispatch = useDispatch()
    const { isVerified } = useSelector(state => state.application)

    useEffect(() => {
        setIsActive(true)
        setTimeout(() => {
            dispatch(emailVerification(true))
        }, 1000)
    }, [setIsActive, dispatch])

    return (
        <Modal>
            {
                !isVerified ? <Loader size={'large'} /> :
                    <ContentContainer>
                        {
                            isVerified ?
                                <div className={`${styles.submit} ${styles.submitAlt} animated`}>
                                    <div className={styles.headerContainer}>
                                        <img src={Valid} alt="valid" className={styles.emojiAlt} />
                                        <Header className={`${styles.header} ${styles.header2}`}>{HEADER}</Header>
                                    </div>
                                    <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
                                        <Button type={'secondary'} size={'large'} label={SUCCESS_BTN} className={styles.btn} />
                                    </div>

                                </div> :
                                <div className={`${styles.submit} animatedAlt`}>
                                    <div className={styles.headerContainer}>
                                        <img src="" alt="error" className={styles.emojiAlt} />
                                        <Header className={`${styles.header} ${styles.header2}`}>{ERR_HEADER}</Header>
                                    </div>
                                    <div className={`${styles.btnContainer} ${styles.btnContainerAltt}`}>
                                        <Button type={'secondary'} size={'large'} label={ERR_BTN} className={styles.btn} />
                                    </div>

                                </div>
                        }
                    </ContentContainer>
            }
        </Modal >
    )
}
