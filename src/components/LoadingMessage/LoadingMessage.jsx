import React from 'react'
import PropTypes from 'prop-types';
import Loader from '../Loader'
import styles from './LoadingMessage.module.css'
import { messages, randomMessage } from './internals/constants';

export const LoadingMessage = ({ loaderVariant, size, className }) => {
    const message = randomMessage(messages, messages.length)

    return (
        <div className={`${styles.loading} ${className}`}>
            <Loader size={size} variant={loaderVariant} />
            <p className={styles.message}>{message}</p>
        </div>
    )
}

LoadingMessage.propTypes = {
    className: PropTypes.string,
    loaderVariant: PropTypes.oneOf(['primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

LoadingMessage.defaultProps = {
    className: '',
    loaderVariant: 'primary',
    size: 'medium',
};
