import React from 'react'
import Button from '../Button'
import styles from './LoginModal.module.css'
import Modal from '../Modal'
import { ModalContext } from '../../context/ModalContext'
import { useContext } from 'react'
import { Close, Hand } from '../../assets'
import { constant } from './internals/constants'

export const LoginModal = () => {
    const { setIsActive } = useContext(ModalContext)
    return (
        <div className={styles.login}>
            <Button label="Login" type='secondary' className={styles.btn} onClick={() => setIsActive((prev) => !prev)} />
            <Modal>
                <section className={styles.ModalContainer}>
                    <div className={styles.close}>
                        <img src={Close} alt="close" onClick={() => setIsActive((prev) => !prev)} />
                    </div>
                    <div className={styles.header}>
                        <img src={Hand} alt="hand" />
                        <div>
                            <p>{constant.HEADER}</p>
                            <p>{constant.SUBHEADER}</p>
                        </div>
                    </div>
                </section>
            </Modal>
        </div>
    )
}
