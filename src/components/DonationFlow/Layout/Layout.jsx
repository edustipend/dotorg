import PropTypes from 'prop-types';

import { Donation } from '../../../assets';
import styles from './Layout.module.css';
import Text from '../../Text';
import { quote } from '../Step1/constants';

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={Donation} alt="donation" />
      </div>
      <div className={styles.right}>
        {children}
        <Text content={quote} className={styles.quote} />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
