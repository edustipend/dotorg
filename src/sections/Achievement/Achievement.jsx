import Header from '../../components/Header';
import Text from '../../components/Text';
import { AtOneImg } from '../../assets';

import { ACHIEVEMENT, CELEBRATE, TEXT, TestId } from './constants';
import styles from './Achievement.module.css';

export const Achievement = () => {
  return (
    <div className={styles.container} data-testid={TestId.ACHIEVMENT}>
      <div className={styles.contents}>
        <div className={styles.texts}>
          <div>
            <Header className={styles.headText}>{CELEBRATE}</Header>
            <Header className={[`${styles.headText} ${styles.blue}`].join(' ')}>{ACHIEVEMENT}</Header>
          </div>
          <Text className={styles.text} content={TEXT} />
        </div>
        <div className={styles.imageContainer}>
          <img src={AtOneImg} alt="edustipend at one" className={styles.image} />
        </div>
      </div>
    </div>
  );
};
