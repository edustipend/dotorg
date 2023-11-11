import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import styles from './LoginModal.module.css';
// import Modal from '../Modal';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
import { CloseAlt, Hand } from '../../assets';
import { constant } from './internals/constants';
import Input from '../Input';
import { isApplicationWindowClosed } from '../../utils';
import NotifyMe from '../../sections/NotifyMe';
import NotifyModal from '../../sections/NotifyMe/internals/NotifyModal';
import { useNavigate } from 'react-router-dom';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';

const userDetails = {
    email: '',
    password: ''
};

const feedbacks = {
    emailSent: '',
    newUser: '',
    incorrectPassword: ''
};

const disabledButtons = {
    continueBtn: true,
    submitBtn: true
};

const mockedExpectations = {
    existsInOldDatabase: true,
    hasResetPassword: false
};
const { existsInOldDatabase, hasResetPassword } = mockedExpectations;
export const LoginModal = () => {
    const nav = useNavigate();
    const { handleLoginModal } = useContext(ModalContext);
    const { handleNotifyModal } = useContext(ModalContext);
    const [shouldContinue, setShouldContinue] = useState(false);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(feedbacks);
    const [secondaryButton, setSecondaryButton] = useState(false);
    const [disabled, setDisabled] = useState(disabledButtons);
    const [subText, setSubText] = useState('Email');
    const [details, setDetails] = useState(userDetails);
    const applicationClosedState = isApplicationWindowClosed();
    const { email, password } = details;
    const { emailSent, newUser } = feedback;
    const { continueBtn, submitBtn } = disabled;

    const disableButton = useCallback(() => {
        const isValid = checkEmail(email);
        if (isValid) {
            setDisabled((prev) => ({ ...prev, continueBtn: false }));
        }
    }, [email]);

    useEffect(() => {
        disableButton();
    }, [disableButton]);

    //mocked function to manage login proccess
    const handleContinue = () => {
        if (hasResetPassword) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setShouldContinue(true);
                setSubText('Password');
            }, 2000);
        } else if (existsInOldDatabase) {
            //send a reset password email
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setDisabled({ ...disabled, continueBtn: true });
                setFeedback({ ...feedback, emailSent: constant.EMAIL_SENT });
            }, 2000);
        } else if (!existsInOldDatabase) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setFeedback({ ...feedback, newUser: constant.NEW_USER });
                setSecondaryButton(true);
            }, 2000);
        }
    };

    //function to handle the secondary button if the user does not exists
    const handleSecondaryButton = useCallback(() => {
        if (applicationClosedState) {
            handleLoginModal((prev) => !prev);
            handleNotifyModal();
        } else {
            handleLoginModal((prev) => !prev);
            nav('/request');
        }
    }, [handleLoginModal, handleNotifyModal, nav, applicationClosedState]);

    return (
        <div className={`modal_modal modal_content`}>
            <div className="animate_modal_modal">
                <section className={styles.ModalContainer}>
                    <div className={styles.close}>
                        <img src={CloseAlt} alt="close" onClick={() => handleLoginModal((prev) => !prev)} />
                    </div>
                    <div className={styles.header}>
                        <img src={Hand} alt="hand" className={styles.hand} />
                        <div className={styles.headerText}>
                            <p className={styles.head}>{constant.HEADER}</p>
                            <p className={styles.subHeader}>{constant.SUBHEADER(subText)}</p>
                        </div>
                    </div>
                    {!shouldContinue ? (
                        <>
                            <div>
                                <Input
                                    placeholder="email"
                                    label={constant.EMAIL}
                                    value={email}
                                    onChange={(e) => setDetails((prev) => ({ ...prev, email: e.target.value }))}
                                />
                                {emailSent && <small className={styles.feedbackSuccess}>{emailSent}</small>}
                                {newUser && <small className={styles.feedbackError}>{newUser}</small>}
                            </div>
                            <div className={styles.btnContainer}>
                                {secondaryButton ? (
                                    <Button label={applicationClosedState ? 'Notify me' : 'Register'} type="secondary" onClick={handleSecondaryButton} />
                                ) : null}
                                <Button
                                    disabled={continueBtn}
                                    label={constant.CONTINUE}
                                    type="secondary"
                                    onClick={handleContinue}
                                    isLoading={loading}
                                    loaderSize="small"
                                    loaderVariant="neutral"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="password"
                                    label={constant.PASSWORD}
                                    value={password}
                                    onChange={(e) => setDetails((prev) => ({ ...prev, password: e.target.value }))}
                                />
                            </div>
                            <div className={styles.btnContainer}>
                                <Button
                                    disabled={submitBtn}
                                    label={constant.SUBMIT}
                                    type="secondary"
                                    isLoading={loading}
                                    loaderSize="small"
                                    loaderVariant="neutral"
                                />
                            </div>
                        </>
                    )}
                </section>
            </div>
            <NotifyModal>
                <NotifyMe />
            </NotifyModal>
        </div>
    );
};