import React from 'react'
import { useContext } from 'react'
import { ModalContext } from '../../../../context/ModalContext'
import styles from '../../../../sections/ApplicationSteps/Step5Application/Internals/Submit/Submit.module.css'


export const Verified = () => {
    const { setIsActive } = useContext(ModalContext)
    console.log(setIsActive);

    return (
        <div className={styles.submit}>
            <h1>Obi</h1>
        </div>
    )
}
