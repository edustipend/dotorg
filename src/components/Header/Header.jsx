import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { TestId } from './constants';

const HeaderSizes = {
  small: 'h3',
  medium: 'h2',
  large: 'h1'
};

export const Header = ({ className, color = 'primary', dataTest, size = 'large', subheader, text }) => {
  const HeaderComponent = HeaderSizes[size];
  return (
    <div className={color === 'primary' ? `${styles.position}` : color === 'secondary' ? `${styles.position} ${styles.alt}` : ''}>
      <HeaderComponent
        data={text}
        className={[`${styles[`header--${size}`]} ${styles[color]}`, subheader ? `${styles.subheader}` : `${styles.header}`, `${className}`].join(
          ' '
        )}
        data-testid={dataTest}
      >
        {text}
      </HeaderComponent>
    </div>
  );
};
Header.propTypes = {
  color: PropTypes.string,
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
  text: 'Default header text',
  color: 'primary'
};
