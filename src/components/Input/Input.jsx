import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { TestId } from './constants';
const { LABEL_ID, INPUT_ID } = TestId;

export const Input = ({
  className,
  currency,
  disabled,
  dataTestId = INPUT_ID,
  element,
  error = '',
  includeLabel,
  label,
  placeholder,
  required,
  size,
  type,
  value,
  ...props
}) => {
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
          data-testid={dataTestId}
          disabled={disabled}
          type={type}
          name="input"
          placeholder={placeholder}
          value={value}
          {...props}
          className={`${styles.input} ${styles[size]} ${currency && styles.inputAlt} ${disabled && styles.disabled} ${className}`}
        />
        {error ? <label className={styles.error}>{error}</label> : <></>}
      </div>
    </section>
  );
};

Input.propTypes = {
  currency: PropTypes.string,
  dataTestId: PropTypes.string,
  error: PropTypes.string,
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
