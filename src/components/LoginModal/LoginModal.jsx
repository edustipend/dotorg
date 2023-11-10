import { useCallback, useState } from 'react';
import Button from '../Button';
import styles from './LoginModal.module.css';
import Modal from '../Modal';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';
import { CloseAlt, Hand } from '../../assets';
import { constant } from './internals/constants';
import Input from '../Input';
import { isApplicationWindowClosed } from '../../utils';
import NotifyMe from '../../sections/NotifyMe';
import NotifyModal from '../../sections/NotifyMe/internals/NotifyModal';
import { useNavigate } from 'react-router-dom';

const feedbacks = {
    emailSent: '',
    newUser: '',
    incorrectPassword: ''
};

const disabledButtons = {
    continueBtn: false,
    submitBtn: true,
}
export const LoginModal = () => {
    const { setIsActive } = useContext(ModalContext);
    const { handleNotifyModal } = useContext(ModalContext);
    const [shouldContinue, setShouldContinue] = useState(false);
    const [loading, setLoading] = useState(false);
    const [feedback, setFeedback] = useState(feedbacks);
    const [secondaryButton, setSecondaryButton] = useState(false);
    const [disabled, setDisabled] = useState(disabledButtons)
    const { emailSent, newUser } = feedback;
    const { continueBtn } = disabled;
    const nav = useNavigate()
    const applicationClosedState = isApplicationWindowClosed()

    const mockedExpectations = {
        existsInOldDatabase: false,
        hasResetPassword: false,
    };
    const { existsInOldDatabase, hasResetPassword } = mockedExpectations;

    //mocked function to manage login proccess
    const handleContinue = () => {
        if (hasResetPassword) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setShouldContinue(true);
            }, 2000);
        } else if (existsInOldDatabase) {
            //send a reset password email
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setDisabled({ ...disabled, submitBtn: false });
                setFeedback({ ...feedback, emailSent: 'You need to reset your password. An email has been sent' });
            }, 2000);
        } else if (!existsInOldDatabase) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setFeedback({ ...feedback, newUser: 'This email does not exists.' });
                setSecondaryButton(true)
            }, 2000);
        }
    };

    //function to handle the secondary button if the user does not exists
    const handleSecondaryButton = useCallback(() => {
        if (applicationClosedState) {
            setIsActive((prev) => !prev);
            handleNotifyModal()
        } else {
            setIsActive((prev) => !prev);
            nav('/request')
        }
    }, [setIsActive, handleNotifyModal, nav, applicationClosedState])


    return (
        <div className={styles.login}>
            <Button label="Login" type="secondary" className={styles.btn} onClick={() => setIsActive((prev) => !prev)} />
            <Modal>
                <section className={styles.ModalContainer}>
                    <div className={styles.close}>
                        <img src={CloseAlt} alt="close" onClick={() => setIsActive((prev) => !prev)} />
                    </div>
                    <div className={styles.header}>
                        <img src={Hand} alt="hand" className={styles.hand} />
                        <div className={styles.headerText}>
                            <p className={styles.head}>{constant.HEADER}</p>
                            <p className={styles.subHeader}>{constant.SUBHEADER}</p>
                        </div>
                    </div>
                    {!shouldContinue ? (
                        <>
                            <div>
                                <Input placeholder="email" label={constant.EMAIL} />
                                {emailSent && <small className={styles.feedbackSuccess}>{emailSent}</small>}
                                {newUser && <small className={styles.feedbackError}>{newUser}</small>}
                            </div>
                            <div className={styles.btnContainer}>
                                {secondaryButton ? <Button
                                    label={applicationClosedState ? "Notify me" : "Register"}
                                    type="secondary"
                                    onClick={handleSecondaryButton}
                                /> : null}
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
                                <Input placeholder="password" label={constant.PASSWORD} />
                            </div>
                            <div className={styles.btnContainer}>
                                <Button label={constant.SUBMIT} type="secondary" isLoading={loading} loaderSize="small" loaderVariant="neutral" />
                            </div>
                        </>
                    )}
                </section>
            </Modal>
            <NotifyModal>
                <NotifyMe />
            </NotifyModal>
        </div>
    );
};
