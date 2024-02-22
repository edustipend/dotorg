import PropTypes from 'prop-types';
import styles from './Text.module.css';

export const Text = ({ content, className, dataTest }) => {
  return (
    <p className={[`${styles.text}`, `${className}`].join(' ')} data-testid={dataTest}>
      {' '}
      {content}{' '}
    </p>
  );
};

Text.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  dataTest: PropTypes.string
};

Text.defaultProps = {
  content: 'Default	 text',
  className: ''
};
