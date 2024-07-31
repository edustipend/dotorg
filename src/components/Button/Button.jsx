import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { ButtonType, ClassName, DEFAULT_BUTTON_LABEL, IconPosition, TestId } from './constants';
import './styles.css';

const getButtonMode = (type) => {
  if (type === 'plain') {
    return ClassName.PLAIN_BUTTON;
  }
  if (type === 'secondary') {
    return ClassName.SECONDARY_BUTTON;
  }
  return ClassName.PRIMARY_BUTTON;
};

/**
 * Button component for use on Edustipend pages
 */
export const Button = ({
  className,
  effectClass,
  dataTest = TestId.DEFAULT_BUTTON_TEST_ID,
  disabled = false,
  effectAlt = false,
  label,
  id,
  icon,
  iconPosition,
  isLoading = false,
  loaderSize = 'medium',
  loaderVariant = 'primary',
  size = 'medium',
  type,
  onClick,
  ...props
}) => {
  const mode = getButtonMode(type);
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`${
        type === ButtonType.PRIMARY ? 'effect' : type === ButtonType.SECONDARY ? 'effect effect_alt' : type === ButtonType.PLAIN ? 'effect' : ''
      }
      ${disabled ? 'disabled' : ''}
      ${effectAlt ? 'effectAlt' : ''} ${effectClass}`}
    >
      <button
        id={id}
        data-testid={dataTest}
        type="button"
        disabled={disabled}
        onClick={handleClick}
        className={[
          `${ClassName.ROOT_BUTTON} `,
          `${ClassName.ROOT_BUTTON}--${size} `,
          `${icon && `${ClassName.ICON} ${ClassName.ROOT_BUTTON}`} `,
          `${className} `,
          mode
        ].join(' ')}
        {...props}
      >
        {isLoading ? <Loader variant={loaderVariant} size={loaderSize} /> : label || DEFAULT_BUTTON_LABEL}
        {icon && (
          <div className={iconPosition === IconPosition.BACK ? 'icon back-icon' : iconPosition === IconPosition.FRONT ? 'icon front-icon' : ''}>
            <img src={icon} alt="icon" />
          </div>
        )}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  dataTest: PropTypes.string,
  disabled: PropTypes.bool,
  effectAlt: PropTypes.bool,
  effectClass: PropTypes.string,
  id: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['back', 'front']),
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  loaderSize: PropTypes.string,
  loaderVariant: PropTypes.string,
  next: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['plain', 'primary', 'secondary'])
};
