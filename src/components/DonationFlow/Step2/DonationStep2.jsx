import { useDispatch, useSelector } from 'react-redux';
import { LeftArrow, OneTime, RecurringIcon } from '../../../assets';
import Button from '../../Button';
import Header from '../../Header';
import Input from '../../Input';
import { Select } from '../../Select/Select';
import Text from '../../Text';
import Layout from '../Layout';
import styles from './DonationStep2.module.css';
import { HeadText, donation, subText } from './constants';
import { next, prev, setAmount, setDonationType, setFrequency } from '../../../store/reducers/DonationReducer';
import Recurring from '../Recurring';
import { formatAsNaira } from '../../../utils/formatAmount/formatAmount';

export const DonationStep2 = () => {
  const { frequency, donationType, amount } = useSelector((state) => state.donation);

  const dispatch = useDispatch();
  const parsedAmount = Number(amount?.split(',').join(''));
  const isValidAmount = parsedAmount > 1000 && parsedAmount < 1000000;

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

        <div className={styles.toggleContainer}>
          <button className={frequency === donation.oneTime ? styles.isActive : null} onClick={() => dispatch(setFrequency(donation.oneTime))}>
            <img src={OneTime} alt="back" />
            <span>{donation.oneTime}</span>
          </button>
          <button className={frequency === donation.recurring ? styles.isActive : null} onClick={() => dispatch(setFrequency(donation.recurring))}>
            <img src={RecurringIcon} alt="back" />
            <span>{donation.recurring}</span>
          </button>
        </div>

        <Select value={donationType} label={donation.label} dispatchType={setDonationType} options={donation.type} className={styles.select} />

        {donationType === donation.cash ? (
          <Input
            label="Amount"
            placeholder="Enter amount"
            type={'text'}
            value={`NGN ${formatAsNaira(amount)}`}
            onChange={(e) => dispatch(setAmount(e.target.value.split(' ')[1]))}
          />
        ) : null}

        {frequency === donation.recurring && donationType === donation.cash ? <Recurring /> : null}

        <Button effectAlt label={'Continue'} type={'secondary'} className={styles.btn} onClick={() => dispatch(next())} disabled={!isValidAmount} />
      </div>
    </Layout>
  );
};
