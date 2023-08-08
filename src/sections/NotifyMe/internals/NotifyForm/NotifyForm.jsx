import React, { useEffect, useState } from 'react';
import bell from '../../../../assets/bell.svg';
import styles from './NotifyForm.module.css';
import { formConstants } from '../constants';
import Button from '../../../../components/Button';
const { HEADING, SUBTITLE, FULLNAME, EMAIL } = formConstants;

export const NotifyForm = () => {
    const initialValue = {
        fullname: '',
        email: ''
    };
    const [userData, setUserData] = useState(initialValue);
    const [disabled, setDisabled] = useState(true);
    const { fullname, email } = userData;

    //validate email and check if the fullname is atleast > 2
    useEffect(() => {
        let regEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regEmail.test(email) && fullname.length > 2) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, fullname]);

    /**
       *   const handleSubmit=(e)=>{
          e.preventDefault()
          handle POST request here   
        }
       */

    return (
        <section className={styles.formArea}>
            <div className={styles.top}>
                <div className={styles.head}>
                    <div className={styles.bellContainer}>
                        <img className={styles.bell} src={bell} alt="bell" />
                    </div>
                    <p className={styles.heading}>{HEADING}</p>
                </div>
                <p className={styles.subtitle}>{SUBTITLE}</p>
            </div>
            <form className={styles.form}>
                <div className={styles.formField}>
                    <label htmlFor="fullname" className={styles.label}>
                        {FULLNAME}<span className={styles.required}>*</span>
                    </label>
                    <input
                        value={fullname}
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        onChange={(e) => setUserData({ ...userData, fullname: e.target.value })}
                        className={styles.Input}
                    />
                </div>
                <div className={styles.formField}>
                    <label htmlFor="email" className={styles.label}>
                        {EMAIL} <span className={styles.required}>*</span>
                    </label>
                    <input
                        value={email}
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className={styles.Input}
                    />
                </div>
                <section className={styles.buttonContainer}>
                    <Button disabled={disabled} label="Notify me" effectAlt type="secondary" className={styles.button} />
                </section>
            </form>
        </section>
    );
};
