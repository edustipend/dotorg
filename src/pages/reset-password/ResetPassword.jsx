import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './ResetPassword.module.css';
import Header from '../../components/Header';
import { constants } from './constants';

const { HEADER, EMAIL, PASSWORD, CODE, CONFIRM_PASSWORD, PASSWORD_MIN_LENGTH_ERR, PASSWORD_MISMATCH } = constants;

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordMisMatch, setPasswordMisMatch] = useState(false);


    useEffect(() => {
        if (window.location.search) {
            const [email, code] = window.location.search.split('&');
            const Email = email.split('=')[1];
            const Code = code.split('=')[1];
            setEmail(Email);
            setCode(Code);
        }
    }, []);

    const onSubmit = async () => {
        const min_length = 8
        if (password !== confirmPassword) {
            setPasswordMisMatch(true)
            return;
        } else if (password.length < min_length) {
            setPasswordErr(true)
            return;
        } else {
            setPasswordMisMatch(false)
            setPasswordErr(false)
        }
    }

    return (
        <section className={styles.reset}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <Header className={styles.header}>{HEADER}</Header>
                    <div className={styles.fields}>
                        <div className={styles.field}>
                            <Input value={email} label={EMAIL} placeholder={EMAIL} readOnly />
                            <Input value={code} label={CODE} placeholder={CODE} readOnly />
                        </div>
                        <div className={styles.field}>
                            <div className={styles.single}>
                                <Input
                                    type={'password'}
                                    value={password}
                                    label={PASSWORD}
                                    placeholder={PASSWORD}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordErr ? <small className={styles.small}>{PASSWORD_MIN_LENGTH_ERR}</small> : undefined}
                            </div>
                            <div className={styles.single}>
                                <Input
                                    type={'password'}
                                    value={confirmPassword}
                                    label={CONFIRM_PASSWORD}
                                    placeholder={CONFIRM_PASSWORD}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {passwordMisMatch ? <small className={styles.small}>{PASSWORD_MISMATCH}</small> : undefined}
                            </div>
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <Button type={'secondary'} size={'large'} label={'Submit'} onClick={onSubmit} className={styles.btn} />
                    </div>
                </div>
            </div>
        </section>
    );
};

//https://edustipend.org/reset-password?email=buchimmaduabuchukwu@gmail.com&code=110918
