import React from 'react';
import PropTypes from 'prop-types';
import { ClassName, DEFAULT_BUTTON_LABEL, TestId } from './constants';
import './styles.css';

/**
 * Button component for use on Edustipend pages
 */
export const Button = ({ backgroundColor, dataTest, primary, size, label, effect, ...props }) => {
  const mode = primary ? ClassName.PRIMARY_BUTTON : ClassName.SECONDARY_BUTTON;
  return (
    <div className={effect === 'primary' ? 'effect' : effect === 'secondary'
      ? 'effect effect_alt' : ''}>
      <button
        data-testid={dataTest}
        type="button"
        className={[ClassName.ROOT_BUTTON, `${ClassName.ROOT_BUTTON}--${size}`, mode].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label || DEFAULT_BUTTON_LABEL}
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
  effect: PropTypes.string
};

Button.defaultProps = {
  backgroundColor: null,
  dataTest: TestId.DEFAULT_BUTTON_TEST_ID,
  primary: false,
  size: 'medium',
  onClick: undefined,
  effect: ''
};
