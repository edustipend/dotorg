import React, { useState } from 'react';
import { Tears } from '../../assets';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Text from '../../components/Text';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';
import { constants } from './constants'
import styles from './ForgotPassword.module.css';

const { HEADER, TEXT, FOOT_NOTE } = constants

export const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const isValid = checkEmail(email)

    return (
        <section className={styles.main}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <img src={Tears} alt="wrong password" className={styles.img} />
                    <Header className={styles.header}>{HEADER}</Header>
                    <Text className={styles.text} content={TEXT} />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={'Email Address'}
                        className={styles.input}
                        mainClass={styles.mainClass}
                    />
                    <div className={styles.btnContainer}>
                        <Button
                            value
                            label={'Send instructions'}
                            type={'secondary'}
                            size={'medium'}
                            disabled={!isValid}
                            effectAlt
                            className={styles.btn}
                        />
                    </div>
                    <Text className={styles.footNote} content={FOOT_NOTE} />
                </div>
            </div>
        </section>
    );
};
