import React from 'react';
import PropTypes from 'prop-types';
import { ClassName, DEFAULT_BUTTON_LABEL, TestId } from './constants';
import './styles.css';

/**
 * Button component for use on Edustipend pages
 */
export const Button = ({
  backgroundColor,
  dataTest,
  primary,
  size,
  label,
  effect,
  disabled,
  plain,
  effectAlt,
  icon,
  iconPosition,
  className,
  ...props
}) => {
  const mode = primary ? ClassName.PRIMARY_BUTTON : ClassName.SECONDARY_BUTTON;
  return (
    <div
      className={`${effect === 'primary' ? 'effect' : effect === 'secondary' ? 'effect effect_alt' : ''}
    ${disabled ? 'disabled' : ''} ${effectAlt ? 'effectAlt' : ''}`}
    >
      <button
        data-testid={dataTest}
        type="button"
        disabled={disabled}
        className={[
          `${ClassName.ROOT_BUTTON}`,
          `${ClassName.ROOT_BUTTON}--${size}`,
          `${plain && ClassName.PLAIN}`,
          `${iconPosition && `${ClassName.ICON} ${ClassName.ROOT_BUTTON}`}`,
          `${className && `${className} ${ClassName.ROOT_BUTTON}`}`,
          mode
        ].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label || DEFAULT_BUTTON_LABEL}
        {icon && (
          <div className={iconPosition === 'back' ? 'icon back-icon' : iconPosition === 'front' ? 'icon front-icon' : ''}>
            <img src={icon} alt="icon" />
          </div>
        )}
      </button>
    </div>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  dataTest: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  effect: PropTypes.string,
  disabled: PropTypes.bool,
  plain: PropTypes.bool,
  effectAlt: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  className: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  dataTest: TestId.DEFAULT_BUTTON_TEST_ID,
  primary: false,
  size: 'medium',
  onClick: undefined,
  effect: '',
  disabled: false,
  plain: false,
  effectAlt: false,
  icon: '',
  iconPosition: '',
  className: ''
};
