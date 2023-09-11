import React, { useContext, useEffect, useReducer } from 'react';
import { Types, INITIAL_STATE, ForgotReducer } from './Reducer';
import { ModalContext } from '../../context/ModalContext';
import { Tears, Valid } from '../../assets';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Modal from '../../components/Modal';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';
import { postData } from '../../services/ApiClient';
import { constants } from './constants';
import styles from './ForgotPassword.module.css';

const { HEADER, TEXT, FOOT_NOTE } = constants;

export const ForgotPassword = () => {
    const { setIsActive } = useContext(ModalContext);
    const [state, dispatch] = useReducer(ForgotReducer, INITIAL_STATE)
    const { LOADING, DISABLED, ERROR, SUCCESS, EMAIL, ON_SUCCESS, ON_ERROR } = Types
    const { email, disabled, feedBack, loading, success, error } = state
    const isValid = checkEmail(email);

    useEffect(() => {
        if (isValid) {
            dispatch({ type: DISABLED, payload: false })
        }
    }, [DISABLED, dispatch, isValid]);

    const sendMail = async () => {
        dispatch({ type: LOADING, payload: true })
        const { success, message } = await postData('reset-password', { email, name: 'default' });
        if (success) {
            dispatch({ type: ON_SUCCESS, payload: message })
            setIsActive((prev) => !prev);
        } else if (!success) {
            dispatch({ type: ON_ERROR, payload: message })
            setIsActive((prev) => !prev);
        }
    };

    if (success) {
        return (
            <section className={styles.main}>
                <div className={styles.contentContainer}>
                    <Modal>
                        <div className={styles.Modal}>
                            <img src={Valid} alt="valid email" className={styles.img} />
                            <p className={styles.feedBack}>{feedBack}</p>
                            <Button
                                effectAlt
                                label={'close'}
                                type={'secondary'}
                                onClick={() => {
                                    dispatch({ type: SUCCESS, payload: false });
                                    setIsActive((prev) => !prev);
                                }}
                            />
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className={styles.main}>
                <div className={styles.contentContainer}>
                    <Modal>
                        <div className={styles.Modal}>
                            <img src={Tears} alt="invalid email" className={styles.imgAlt} />
                            <p className={styles.feedBack}>{feedBack}</p>
                            <Button
                                effectAlt
                                label={'close'}
                                type={'secondary'}
                                onClick={() => {
                                    dispatch({ type: ERROR, payload: false });
                                    setIsActive((prev) => !prev);
                                }}
                            />
                        </div>
                    </Modal>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.main}>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <img src={Tears} alt="wrong password" className={styles.img} />
                    <Header className={styles.header}>{HEADER}</Header>
                    <Text className={styles.text} content={TEXT} />
                    <Input
                        value={email}
                        onChange={(e) => dispatch({ type: EMAIL, payload: e.target.value })}
                        label={'Email Address'}
                        className={styles.input}
                        mainClass={styles.mainClass}
                    />
                    <div className={styles.btnContainer}>
                        <Button
                            value
                            effectAlt
                            isLoading={loading}
                            loaderSize={'small'}
                            loaderVariant={'neutral'}
                            label={'Send instructions'}
                            type={'secondary'}
                            size={'medium'}
                            disabled={disabled}
                            onClick={sendMail}
                            className={styles.btn}
                        />
                    </div>
                    <Text className={styles.footNote} content={FOOT_NOTE} />
                </div>
            </div>
        </section>
    );
};
