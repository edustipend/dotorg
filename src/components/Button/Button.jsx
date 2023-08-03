import React from 'react';
import PropTypes from 'prop-types';
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
export const Button = ({ className, dataTest, disabled, effectAlt, label, icon, iconPosition, size, type, ...props }) => {
  const mode = getButtonMode(type);
  return (
    <div
      className={`${type === ButtonType.PRIMARY ? 'effect' : type === ButtonType.SECONDARY ? 'effect effect_alt' : ''}
  ${disabled ? 'disabled' : ''} ${effectAlt ? 'effectAlt' : ''}`}
    >
      <button
        data-testid={dataTest}
        type="button"
        disabled={disabled}
        className={[
          `${ClassName.ROOT_BUTTON}`,
          `${ClassName.ROOT_BUTTON}--${size}`,
          `${icon && `${ClassName.ICON} ${ClassName.ROOT_BUTTON}`}`,
          `${className}`,
          mode
        ].join(' ')}
        {...props}
      >
        {label || DEFAULT_BUTTON_LABEL}
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
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['back', 'front']),
  label: PropTypes.string.isRequired,
  next: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['plain', 'primary', 'secondary'])
};

Button.defaultProps = {
  className: '',
  dataTest: TestId.DEFAULT_BUTTON_TEST_ID,
  disabled: false,
  effectAlt: false,
  icon: '',
  iconPosition: 'front',
  label: 'Click me',
  onClick: undefined,
  size: 'medium',
  plain: false
};
