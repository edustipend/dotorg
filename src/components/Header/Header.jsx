import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { TestId } from './constants';

const HeaderSizes = {
  small: 'h3',
  medium: 'h2',
  large: 'h1'
};

export const Header = ({ dataTest, size = 'large', color = 'primary', subheader, text }) => {
  const HeaderComponent = HeaderSizes[size];
  return (
    <div className={color === 'primary' ? `${styles.position}` : color === 'secondary' ? `${styles.position} ${styles.alt}` : ''}>
      <HeaderComponent
        data={text}
        className={
          subheader
            ? `${styles.subheader}`
            : !subheader & (color === 'primary')
            ? `${styles.effect} `
            : !subheader & (color === 'secondary')
            ? `${styles.effect} ${styles.secondary} `
            : color === 'primary'
            ? `${styles.priColor} `
            : color === 'secondary'
            ? `${styles.secColor} `
            : ''
        }
        data-testid={dataTest}
      >
        {text}
      </HeaderComponent>
    </div>
  );
};

/**
 * className={[`${ styles.header } `, `${ styles[`header-${size}`] }
}`,
      subheader ? `${ styles.subheader } ` : !subheader & color === 'primary' ? `${ styles.effect } `
        : !subheader & color === 'secondary' ? `${ styles.effect } ${ styles.secondary } ` : ''
        , `${ className } `].join(' ')}
      data-testid={dataTest}
 */
Header.propTypes = {
  className: PropTypes.string,
  dataTest: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  subheader: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string
};

Header.defaultProps = {
  className: '',
  dataTest: TestId.DEFAULT_HEADER_TEST_ID,
  size: 'large',
  subheader: false,
  text: 'Default header text',
  color: 'primary'
};
