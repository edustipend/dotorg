import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { TestId } from './constants';

const HeaderSizes = {
  small: 'h3',
  medium: 'h2',
  large: 'h1'
};

export const Header = ({ className, children, color = 'primary', dataTest, size, subheader }) => {
  const HeaderComponent = HeaderSizes[size];
  return (
    <HeaderComponent
      className={[`${styles[`header--${size}`]} ${styles[color]}`, subheader ? `${styles.subheader}` : `${styles.header}`, `${className}`].join(' ')}
      data-testid={dataTest}
    >
      {children}
    </HeaderComponent>
  );
};
Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  dataTest: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  subheader: PropTypes.bool
};

Header.defaultProps = {
  className: '',
  children: <>Some default header text</>,
  color: 'primary',
  dataTest: TestId.DEFAULT_HEADER_TEST_ID,
  size: 'large',
  subheader: false
};
