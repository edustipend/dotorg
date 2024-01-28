import PropTypes from 'prop-types';
import styles from './ActionBanner.module.css';
import { TestId } from './constants';
import Button from '../Button';

export const ActionBanner = ({ buttonLabel, className, dataTest, handleCTAClick, text, type, isLoading }) => {
  return (
    <aside role="alert" className={[`${styles[`banner--${type}`]} ${styles['banner']}`, `${className}`].join(' ')} data-testid={dataTest}>
      <p className={styles.bannerText}>{text}</p>
      <Button label={buttonLabel} size="medium" onClick={handleCTAClick} disabled={isLoading} className={styles.button} />
    </aside>
  );
};

ActionBanner.propTypes = {
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  handleCTAClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(['sticky', 'default']),
  isLoading: PropTypes.bool
};

ActionBanner.defaultProps = {
  buttonLabel: 'Click me',
  className: '',
  dataTest: TestId.ACTION_BANNER_TEST_ID,
  handleCTAClick: () => {},
  text: 'Some text',
  type: 'sticky',
  isLoading: false
};
