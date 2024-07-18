import styles from './FormInput.module.css';
import PropTypes from 'prop-types';

export default function FormInput({ label, placeholder, type }) {
  return (
    <div className={styles.formField}>
      <label className={styles.formLabel} htmlFor="name">
        {label}
      </label>
      <input className={styles.inputField} type={type} placeholder={placeholder} />
    </div>
  );
}
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
