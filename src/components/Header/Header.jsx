import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { TestId } from './constants';

const HeaderSizes = {
  small: 'h3',
  medium: 'h2',
  large: 'h1'
};

export const Header = ({ className, dataTest, size = 'large', subheader, text }) => {
  const HeaderComponent = HeaderSizes[size];
  return (
    <HeaderComponent
      className={[`${styles.header}`, `${styles[`header-${size}`]}`, subheader ? `${styles.subheader}` : '', `${className}`].join(' ')}
      data-testid={dataTest}
    >
      {text}
    </HeaderComponent>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  dataTest: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  subheader: PropTypes.bool,
  text: PropTypes.string
};

Header.defaultProps = {
  className: '',
  dataTest: TestId.DEFAULT_HEADER_TEST_ID,
  size: 'large',
  subheader: false,
  text: 'Default header text'
};
