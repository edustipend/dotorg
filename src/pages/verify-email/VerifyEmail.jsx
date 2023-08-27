import React from 'react'
import styles from './VerifyEmail.module.css'
import Verified from './Internals/Verified'

export const VerifyEmail = () => {
    return (
        <div className={styles.verify}>
            <Verified />
        </div>
    )
}
