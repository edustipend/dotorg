import { CloseIcon, Copy, LeftArrow, MasterCard, Visa } from '../../../../assets';
import Modal from '../../../Modal';
import Button from '../../../Button';
import Header from '../../../Header';
import Input from '../../../Input';
import Text from '../../../Text';
import Layout from '../../Layout';
import styles from './CashDonationStep3.module.css';
import { HeadText, modalQuote, subText } from './constants';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../../../context/ModalContext';
import Loader from '../../../Loader';
import { next, prev, setPaymentType } from '../../../../store/reducers/DonationReducer';
import { useDispatch, useSelector } from 'react-redux';
import { formatAsNaira } from '../../../../utils/formatAmount/formatAmount';

export const CashDonationStep3 = () => {
  const { setIsActive } = useContext(ModalContext);
  const dispatch = useDispatch();
  const { amount, paymentType } = useSelector((state) => state.donation);
  const initialTime = 600; // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <Modal>
        <div className={styles.modalForm}>
          <div className={styles.close}>
            <img src={CloseIcon} alt="close" onClick={() => setIsActive((prev) => !prev)} />
          </div>
          <Text content={'Please enter your 4-digit card PIN to confirm donation of NGN 50,000 to Edustipend'} className={styles.text} />
          <div className={styles.inputContainer}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <Button effectAlt label={'Confirm'} type={'secondary'} onClick={() => dispatch(next())} className={styles.confirm} />
          <Text content={modalQuote} className={styles.modalQt} />
          <div className={styles.loading}>
            <Loader size={'large'} />
          </div>
        </div>
      </Modal>
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
            <p>Pay With:</p>
            <div>
              <label htmlFor="card" className={styles.radioInput}>
                <input
                  type="radio"
                  name="card"
                  id="card"
                  value="cash"
                  checked={paymentType === 'cash'}
                  onClick={() => dispatch(setPaymentType('cash'))}
                />
                <span>Card</span>
              </label>
              <label htmlFor="transfer" className={styles.radioInput}>
                <input
                  type="radio"
                  name="card"
                  id="transfer"
                  value="transfer"
                  checked={paymentType === 'transfer'}
                  onClick={() => dispatch(setPaymentType('transfer'))}
                />
                <span>Transfer</span>
              </label>
            </div>
          </div>
          {paymentType === 'cash' ? (
            <>
              <Input label="Card Number" placeholder="XXXX XXXX XXXX XXXX" type={'text'} />
              <div className={styles.card}>
                <div className={styles.date}>
                  <Input label="Expiration Date" placeholder="XX/XX" type={'text'} />
                </div>
                <div className={styles.cvv}>
                  <Input label="CVV" placeholder="XXX" type={'text'} />
                </div>
              </div>
              <div className={styles.cardImages}>
                <img src={Visa} alt="visa" />
                <img src={MasterCard} alt="master card" />
              </div>
              <Button
                effectAlt
                label={`Pay NGN ${formatAsNaira(amount)}`}
                type={'secondary'}
                size="large"
                onClick={() => setIsActive((prev) => !prev)}
                className={styles.btn}
              />
            </>
          ) : (
            <div className={styles.transferContainer}>
              <Text content={`Transfer NGN ${formatAsNaira(amount)}.00 to:`} className={styles.transfer} />
              <Text content={`Polaris Bank`} className={styles.bank} />
              <div className={styles.acctNumContainer}>
                <Text content={`0123456781`} className={styles.acctNum} />
                <img src={Copy} alt="copy" onClick={() => navigator.clipboard.writeText('0123456781')} />
              </div>
              <p className={styles.exp}>
                Expires in <span>{`${minutes.toString().padStart(0, 2)}:${seconds.toString().padStart(0, 2)}`}</span> minutes
              </p>
              <Button effectAlt label={`Confirm Transfer`} type={'secondary'} size="large" onClick={() => dispatch(next())} className={styles.btn} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
