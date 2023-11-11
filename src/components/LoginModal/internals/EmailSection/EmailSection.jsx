import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../LoginModal.module.css';
import Button from '../../../Button';
import Input from '../../../Input';

export const EmailSection = ({
    applicationClosedState,
    constant,
    continueBtn,
    email,
    emailSent,
    handleSecondaryButton,
    handleContinue,
    loading,
    newUser,
    setDetails,
    secondaryButton
}) => {

    return (
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
                    <Button
                        label={applicationClosedState ? 'Notify me' : 'Register'}
                        type="secondary"
                        onClick={handleSecondaryButton}
                        className={styles.button}
                    />
                ) : null}
                <Button
                    disabled={continueBtn}
                    label={constant.CONTINUE}
                    type="secondary"
                    onClick={handleContinue}
                    isLoading={loading}
                    loaderSize="small"
                    loaderVariant="neutral"
                    className={styles.button}
                />
            </div>
        </>
    );
};

EmailSection.propTypes = {
    applicationClosedState: PropTypes.bool,
    constant: PropTypes.object,
    continueBtn: PropTypes.func,
    email: PropTypes.string,
    emailSent: PropTypes.string,
    handleSecondaryButton: PropTypes.func,
    handleContinue: PropTypes.func,
    loading: PropTypes.bool,
    newUser: PropTypes.string,
    setDetails: PropTypes.func,
    secondaryButton: PropTypes.func
};

EmailSection.defaultProps = {
    applicationClosedState: null,
    constant: {},
    continueBtn: (e) => e,
    email: '',
    emailSent: '',
    handleSecondaryButton: () => { },
    handleContinue: (e) => e,
    loading: false,
    newUser: '',
    setDetails: () => { },
    secondaryButton: (e) => e
}