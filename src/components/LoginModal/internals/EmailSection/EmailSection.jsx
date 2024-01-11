import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../LoginModal.module.css';
import Button from '../../../Button';
import Input from '../../../Input';

export const EmailSection = ({
    constant,
    continueBtn,
    disabled,
    email,
    handleContinue,
    loading,
    password,
    setDetails,
}) => {

    return (
        <>
            <div className={styles.emailSection}>
                <Input
                    placeholder="email"
                    label={constant.EMAIL}
                    value={email}
                    onChange={(e) => setDetails((prev) => ({ ...prev, email: e.target.value }))}
                />
                <Input
                    placeholder="email"
                    label={constant.PASSWORD}
                    value={password}
                    onChange={(e) => setDetails((prev) => ({ ...prev, password: e.target.value }))}
                />
            </div>
            <div className={styles.btnContainer}>
                <Button
                    disabled={disabled}
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
    constant: PropTypes.object,
    continueBtn: PropTypes.func,
    disabled: PropTypes.bool,
    email: PropTypes.string,
    handleContinue: PropTypes.func,
    password: PropTypes.string,
    loading: PropTypes.bool,
    setDetails: PropTypes.func,
};

EmailSection.defaultProps = {
    constant: {},
    continueBtn: (e) => e,
    email: '',
    password: '',
    handleContinue: (e) => e,
    loading: false,
    disabled: false,
    setDetails: () => { },
}