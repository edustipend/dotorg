import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './ResetPassword.module.css';
import Header from '../../components/Header';
import { constants } from './constants';

const { HEADER, EMAIL, PASSWORD, CODE, CONFIRM_PASSWORD } = constants;

export const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (window.location.search) {
            const [email, code] = window.location.search.split('&');
            const Email = email.split('=')[1];
            const Code = code.split('=')[1];
            setEmail(Email);
            setCode(Code);
        }
    }, []);

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
                            <Input
                                value={password}
                                label={PASSWORD}
                                placeholder={PASSWORD}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                value={confirmPassword}
                                label={CONFIRM_PASSWORD}
                                placeholder={CONFIRM_PASSWORD}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.btnContainer}>
                        <Button type={'secondary'} size={'large'} label={'Submit'} className={styles.btn} />
                    </div>
                </div>
            </div>
        </section>
    );
};

//https://edustipend.org/reset-password?email=buchimmaduabuchukwu@gmail.com&code=110918
