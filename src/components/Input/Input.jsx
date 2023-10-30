import PropTypes from 'prop-types';
import styles from './Input.module.css';
import { TestId } from './constants';
const { LABEL_ID, INPUT_ID } = TestId;

export const Input = ({ placeholder, label, includeLabel, value, type, size, className, required, ...props }) => {
  return (
    <section className={styles.main}>
      {includeLabel ? (
        <label data-testid={LABEL_ID} htmlFor="input" className={styles.label}>
          {label} {required ? <span className={styles.required}>*</span> : undefined}
        </label>
      ) : undefined}
      <input
        data-testid={INPUT_ID}
        type={type}
        name="input"
        placeholder={placeholder}
        value={value}
        {...props}
        className={`${styles.input} ${styles[size]} ${className}`}
      />
    </section>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  includeLabel: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  placeholder: 'Placeholder...',
  label: 'Some label',
  includeLabel: true,
  required: true,
  value: '',
  type: 'text',
  size: '',
  className: ''
};
