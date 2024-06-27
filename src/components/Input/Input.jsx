import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { TestId } from './constants';
const { LABEL_ID, INPUT_ID } = TestId;

export const Input = ({ currency, element, placeholder, label, includeLabel, value, type, size, className, disabled, required, ...props }) => {
  return (
    <section className={`${styles.main} ${disabled && styles.disabled}`}>
      {includeLabel ? (
        <label data-testid={LABEL_ID} htmlFor="input" className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>} {element}
        </label>
      ) : undefined}
      <div className={styles.inputContainer}>
        {currency && <span className={styles.currency}>{currency}</span>}
        <input
          data-testid={INPUT_ID}
          disabled={disabled}
          type={type}
          name="input"
          placeholder={placeholder}
          value={value}
          {...props}
          className={`${styles.input} ${styles[size]} ${currency && styles.inputAlt} ${disabled && styles.disabled} ${className}`}
        />
      </div>
    </section>
  );
};

Input.propTypes = {
  currency: PropTypes.string,
  element: PropTypes.node,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  includeLabel: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
};

Input.defaultProps = {
  currency: '',
  element: null,
  placeholder: 'Placeholder...',
  label: 'Some label',
  includeLabel: true,
  value: '',
  type: 'text',
  size: '',
  className: '',
  disabled: false,
  required: true
};
