import styles from './Welcome.module.css';
import { Flower } from '../../assets';
import Header from '../../components/Header';
import { BTN, headText, dashboard, subText, desc, TestId } from './constants';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <main>
      <div className={styles.container} data-testid={TestId.WELCOME_CONTAINER}>
        <div className={styles.backdrop}>
          <div className={styles.welcome}>
            <div className={styles.img}>
              <img src={Flower} alt="flower" />
            </div>
            <Header className={styles.headText} dataTest={TestId.HEAD_TEXT}>
              {headText}
            </Header>
            <div className={styles.textContainer}>
              <Text className={styles.subText} content={subText} dataTest={TestId.SUB_TEXT} />
            </div>
            <div className={styles.desc}>
              <p>{desc.head}</p>
              <ul>
                {desc.list.map((list, i) => (
                  <li key={i}>{list}</li>
                ))}
              </ul>
            </div>
            <Link to={dashboard} className={styles.btnContainer}>
              <Button label={BTN.label} type={BTN.type} dataTest={TestId.CTA_BTN} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
