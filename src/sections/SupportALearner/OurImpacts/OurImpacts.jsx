import { Our_Impact } from '../../../assets';
import Button from '../../../components/Button';
import styles from './OurImpacts.module.css';
import { btnLabels, description, headText, numbers, subText } from './constants';

const OurImpacts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h1>{headText}</h1>
      </div>
      <img src={Our_Impact} alt="our impact" className={styles.image} />
      <div className={styles.contentWrapper}>
        <div className={styles.description}>
          <h1>{description}</h1>
          <p>{subText}</p>
        </div>
        <div className={styles.numbers}>
          {numbers.map((number) => (
            <div key={number.label} className={styles.box}>
              <h2>{number.value}</h2>
              <p>{number.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button label={btnLabels.view} type="plain" />
        <Button label={btnLabels.support} type="secondary" />
      </div>
    </div>
  );
};

export default OurImpacts;
