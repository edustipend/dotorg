import { useDispatch, useSelector } from 'react-redux';
import { LeftArrow } from '../../../../assets';
import Button from '../../../Button';
import Header from '../../../Header';
import Text from '../../../Text';
import Layout from '../../Layout';
import styles from './LaptopDonationStep4.module.css';
import { HeadText, subText, thanks } from './constants ';
import { next, prev } from '../../../../store/reducers/DonationReducer';

export const LaptopDonationStep4 = () => {
  const { brand, condition, quantity, model, details } = useSelector((state) => state.donation);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className={styles.form}>
        <div className={styles.backBtnContainer}>
          <button className={styles.backBtn} onClick={() => dispatch(prev())}>
            <img src={LeftArrow} alt="back" />
            <span>Back</span>
          </button>
        </div>
        <div>
          <Header className={styles.headText}>{HeadText}</Header>
          <Text content={subText} className={styles.subText} />
        </div>
        <Text content={thanks} className={styles.thanks} />

        <div>
          <Text content={'Brand'} className={styles.details} />
          <Text content={brand} className={styles.value} />
        </div>
        <div>
          <Text content={'Model'} className={styles.details} />
          <Text content={model} className={styles.value} />
        </div>
        <div>
          <Text content={'Condition'} className={styles.details} />
          <Text content={condition} className={styles.value} />
        </div>
        <div>
          <Text content={'Quantity'} className={styles.details} />
          <Text content={quantity} className={styles.value} />
        </div>

        <div className={styles.textContainer}>
          <label htmlFor="question" className={styles.label}>
            <p className={styles.question}>Additional details (if any)</p>
          </label>
          <textarea value={details} name="question" id="question" cols="30" rows="10" className={styles.textarea} disabled />
        </div>

        <Button effectAlt label={'Continue'} type={'secondary'} className={styles.btn} onClick={() => dispatch(next())} />
      </div>
    </Layout>
  );
};
