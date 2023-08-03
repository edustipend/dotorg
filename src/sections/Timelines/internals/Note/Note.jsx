import PropTypes from 'prop-types';
import Text from '../../../../components/Text';
import styles from './Note.module.css';
import Header from '../../../../components/Header';
import { Avatar, DarkCurve, LightCurve, Pin, Twitter } from '../../../../assets';
import { TestId, EDUSTIPEND, content, userName, userProfile, TWITTER } from '../../constants';
import { Link } from 'react-router-dom';
import { styleNote } from '../../utils';

export const Note = ({ index, content, userName, userProfile }) => {
  return (
    <div data-testid={TestId.NOTE_ID} className={styles.container} style={styleNote(index)}>
      <img src={Pin} alt="pin" className={styles.pin} />
      <div className={styles.textContainer}>
        <Link to={EDUSTIPEND.PROFILE}>
          <Text className={[`${styles.edustipend} ${styles.text}`].join(' ')} content={EDUSTIPEND.AT_ONE} />
        </Link>
        <Text className={styles.text} content={content} />
      </div>
      <div className={styles.user}>
        <Header className={styles.userName}>{userName}</Header>
        <div>
          <Link to={`${TWITTER}${userProfile}`} className={styles.link}>
            <img src={Twitter} alt="twitter" />
            <Text className={styles.userProfile} content={userProfile} />
          </Link>
        </div>
      </div>
      <div className={styles.curves}>
        <img src={LightCurve} alt="light curve" />
        <img src={DarkCurve} alt=" dark curve" />
      </div>
      <div className={styles.avatar}>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

Note.propTypes = {
  index: PropTypes.number,
  content: PropTypes.string,
  userName: PropTypes.string,
  userProfile: PropTypes.string
};

Note.defaultProps = {
  content,
  userName,
  userProfile
};
