import React, { useContext } from 'react'
import styles from './NotifyMe.module.css'
import Button from '../../components/Button'
import closeIcon from '../../assets/close-alt.svg'
import { ModalContext } from '../../context/ModalContext'

export const NotifyMe = () => {
    const { handlePopModal } = useContext(ModalContext)
    return (
        <section className={styles.notify}>
            <div className={styles.closeContainer} onClick={handlePopModal}>
                <img src={closeIcon} alt="closeModal" className={styles.closeModal} />
            </div>
            <div className={styles.buttonContainer}>
                <Button label='Notify me' effectAlt type='secondary' className={styles.button} />
            </div>
        </section>
    )
}
