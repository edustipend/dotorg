import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { TestId } from './constants';


export const Header = ({ className, dataTest, color, subheader, text }) => {
  return (
    <h1 className={[`${styles.header}`, subheader ? `${styles.subheader}` : '', `${className}`].join(' ')}
      data-testid={dataTest}
      style={{ color: `${color}` }}
    >
      {text}
    </h1>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  dataTest: PropTypes.string,
  subheader: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
};

Header.defaultProps = {
  className: '',
  dataTest: TestId.DEFAULT_HEADER_TEST_ID,
  subheader: false,
  text: 'Default header text',
  color: '#2D3740'
};
