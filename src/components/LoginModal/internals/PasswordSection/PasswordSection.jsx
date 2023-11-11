import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../LoginModal.module.css'
import Input from '../../../Input'
import Button from '../../../Button'
import { Link } from 'react-router-dom'


export const PasswordSection = ({ constant, handleLoginModal, loading, password, setDetails, submitBtn }) => {
    return (
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
                    className={styles.button}
                />
            </div>
            <Link to="forgot-password" onClick={() => handleLoginModal((prev) => !prev)} className={styles.forgotPassword}>
                Forgot password?
            </Link>
        </>
    )
}

PasswordSection.propTypes = {
    constant: PropTypes.object,
    handleLoginModal: PropTypes.func,
    loading: PropTypes.bool,
    password: PropTypes.string,
    setDetails: PropTypes.func,
    submitBtn: PropTypes.func,
}