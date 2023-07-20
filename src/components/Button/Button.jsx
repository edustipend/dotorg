import React from 'react';
import PropTypes from 'prop-types';
import { ClassName, DEFAULT_BUTTON_LABEL, TestId } from './constants';
import './styles.css';
import arrow_left from '../../assets/arrow-left.svg';
import arrow_right from '../../assets/arrow-right.svg';

/**
 * Button component for use on Edustipend pages
 */
export const Button = ({ backgroundColor, dataTest, primary, size, label, effect, disabled, back, forward, ...props }) => {
  const mode = primary ? ClassName.PRIMARY_BUTTON : ClassName.SECONDARY_BUTTON;
  return (
    <div
      className={`${effect === 'primary' ? 'effect' : effect === 'secondary' ? 'effect effect_alt' : ''}
    ${disabled ? 'disabled' : ''}`}
    >
      <button
        data-testid={dataTest}
        type="button"
        disabled={disabled}
        className={[
          `${back | forward ? `${ClassName.REQUEST_SECTION} ${ClassName.ROOT_BUTTON}` : ClassName.ROOT_BUTTON}`,
          `${ClassName.ROOT_BUTTON}--${size}`,
          mode
        ].join(' ')}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {back && (
          <div className='arrow'>
            <img src={arrow_left} alt="go-back" />
          </div>
        )}
        {label || DEFAULT_BUTTON_LABEL}
        {forward && (
          <div className='arrow'>
            <img src={arrow_right} alt="continue" />
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
  back: PropTypes.bool,
  forward: PropTypes.bool
};

Button.defaultProps = {
  backgroundColor: null,
  dataTest: TestId.DEFAULT_BUTTON_TEST_ID,
  primary: false,
  size: 'medium',
  onClick: undefined,
  effect: '',
  disabled: false,
  back: false,
  forward: false
};
