import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '../../../../../components/Button';
import Header from '../../../../../components/Header';
import { constants } from '../constants';
import { Eyes, Tears, BackArrow } from '../../../../../assets'
import styles from './Consent.module.css'
import { useNavigate } from 'react-router-dom';
const { DECLINE, PROMPT, KEEP, DISCARD, DECLINE2, PROMPT2, KEEP2, DISCARD2 } = constants

export const Consent = ({ setIsActive }) => {
    const [refused, setRefused] = useState(false)
    const nav = useNavigate()

    const handleClose = () => {
        setIsActive(prev => !prev)
        setRefused(prev => !prev)
    }

    //push the user to the landing page if they don't give consent
    const handleNavigate = () => {
        nav('/')
        nav(0)
    }

    return (
        <div className={styles.consent}>
            <img src={BackArrow} alt="goBack" onClick={handleClose} className={styles.arrow} />
            {refused ?
                <div className={`${styles.declined} animated`}>
                    <img src={Tears} alt="tears" />
                    <Header className={styles.header}>{DECLINE2}</Header>
                    <p className={styles.prompt}>{PROMPT2}</p>
                    <div className={`${styles.btnContainer} ${styles.btnContainer2}`}>
                        <Button
                            type={'secondary'}
                            effectAlt
                            label={KEEP2}
                            onClick={() => { setRefused(prev => !prev) }}
                            className={styles.btn}
                        />
                        <Button
                            type={'plain'}
                            effectAlt
                            label={DISCARD2}
                            onClick={() => { handleClose(); handleNavigate() }}
                            className={styles.btn}
                        />
                    </div>
                </div>
                :
                <div className={`${styles.declined} animatedAlt`}>
                    <img src={Eyes} alt="eyes" className={styles.emoji} />
                    <Header className={styles.header}>{DECLINE}</Header>
                    <p className={styles.prompt}>{PROMPT}</p>
                    <div className={styles.btnContainer}>
                        <Button
                            type={'secondary'}
                            effectAlt
                            label={KEEP}
                            onClick={() => setIsActive(prev => !prev)}
                            className={styles.btn}
                        />
                        <Button
                            type={'plain'}
                            effectAlt
                            label={DISCARD}
                            onClick={() => { setRefused(prev => !prev) }}
                            className={styles.btn}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

Consent.propTypes = {
    setIsActive: PropTypes.func
}

Consent.propTypes = {
    setIsActive: () => { }
}