import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import { TestId } from './constants';

export const Banner = ({ className, children, dataTest, type }) => {
  return (
    <aside role="alert" className={[`${styles[`banner--${type}`]} ${styles['banner']}`, `${className}`].join(' ')} data-testid={dataTest}>
      {children}
    </aside>
  );
};

Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'error', 'info'])
};

Banner.defaultProps = {
  className: '',
  children: <>Some default banner text</>,
  dataTest: TestId.DEFAULT_BANNER_TEST_ID,
  type: 'info'
};
