import PropTypes from 'prop-types';
import styles from './Quote.module.css';

export const Quote = ({ content, className, dataTest }) => {
  return (
    <p className={[styles.quote, className].join(' ')} data-testid={dataTest}>
      {content}
    </p>
  );
};

Quote.propTypes = {
  content: PropTypes.string,
  boldcontent: PropTypes.string,
  className: PropTypes.string,
  dataTest: PropTypes.string
};

Quote.defaultProps = {
  content: 'Default Quote Text',
  className: ''
};
