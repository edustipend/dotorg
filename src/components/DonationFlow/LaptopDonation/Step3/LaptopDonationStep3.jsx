import { useDispatch, useSelector } from 'react-redux';
import { LeftArrow } from '../../../../assets';
import { next, prev, setBrand, setCondition, setDetails, setModel, setQuantity } from '../../../../store/reducers/DonationReducer';
import Button from '../../../Button';
import Header from '../../../Header';
import Input from '../../../Input';
import { Select } from '../../../Select/Select';
import Text from '../../../Text';
import Layout from '../../Layout';
import styles from './LaptopDonationStep3.module.css';
import { ConditionLabel, HeadText, QuantityLabel, brandLabel, brandOptions, conditionOptions, quantityOptions, subText } from './constants';
import { donation } from '../../Step2/constants';
import Recurring from '../../Recurring';

export const LaptopDonationStep3 = () => {
  const dispatch = useDispatch((state) => state.donation);
  const { brand, condition, quantity, model, details, frequency } = useSelector((state) => state.donation);

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

        <Select value={brand} dispatchType={setBrand} label={brandLabel} options={brandOptions} className={styles.select} />

        <Input label="Model" value={model} onChange={(e) => dispatch(setModel(e.target.value))} placeholder="Enter laptop model" type={'text'} />

        <Select value={condition} dispatchType={setCondition} label={ConditionLabel} options={conditionOptions} className={styles.select} />

        <Select value={quantity} dispatchType={setQuantity} label={QuantityLabel} options={quantityOptions} className={styles.select} />

        {frequency === donation.recurring ? <Recurring /> : null}

        <div className={styles.textContainer}>
          <label htmlFor="question" className={styles.label}>
            <p className={styles.question}>Additional details (if any)</p>
          </label>
          <textarea
            placeholder="Enter details here"
            name="question"
            id="question"
            cols="30"
            rows="10"
            className={styles.textarea}
            value={details}
            onChange={(e) => dispatch(setDetails(e.target.value))}
          />
        </div>

        <Button effectAlt label={'Continue'} type={'secondary'} className={styles.btn} onClick={() => dispatch(next())} />
      </div>
    </Layout>
  );
};
