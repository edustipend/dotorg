import React from 'react'
import Button from '../Button'
import styles from './LoginModal.module.css'

export const LoginModal = () => {
    return (
        <div className={styles.login}>
            <Button label="Login" type='secondary' className={styles.btn} />
        </div>
    )
}
