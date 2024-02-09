import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './DonateNow.module.css';
import { aisha, info, infoArrow, quoteLeft, quoteRight } from '../../assets';
import { TestId, constants } from './constants';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { UseModal } from '../../components/Modal/UseModal';
import RedirectModal from './internals/redirectModal';
import TransactionModal from './internals/transactionModal';
import { ModalContext } from '../../context/ModalContext';
import formatNumber from '../../utils/numberFormatter';

const initial = {
  fullname: '',
  email: '',
  phone: '',
  company: ''
};
export const DonateNow = () => {
  const location = useLocation();
  const { value } = location.state || { value: 1000 };
  const [amount, setAmount] = useState(value);
  const [toggle, setToggle] = useState(false);
  const [focus, setFocus] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState(initial);
  const { redirectModal, handleRedirectModal, transactionModal, handleTransactionModal } = useContext(ModalContext) || {};
  console.log(handleRedirectModal);
  const formattedNumber = formatNumber(amount);
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const phoneInfo = (
    <div className={styles.phoneInfo} onFocus={handleFocus} onBlur={handleBlur} tabIndex="0">
      <img src={info} alt="info" className={styles.img} />
      <div className={`${styles.info} ${focus && styles.infoFocus}`}>
        <p className={styles.titleInfo}>{constants.tooltip_title}</p>
        <p className={styles.subtitleInfo}>{constants.tooltip_subtitle}</p>
        <img src={infoArrow} alt="infoArrow" className={styles.infoArrow} />
      </div>
    </div>
  );

  const handleDonation = () => {
    handleTransactionModal();
    setTitle(constants.donation_success_header);
    setMessage(constants.donation_success);
  };

  //input value should not be greater than 1000000
  const handleAmountChange = (e) => {
    const max = 1000000;
    const value = e.target.value;
    if (value === '' || (value >= 0 && value <= max)) {
      setAmount(value);
    }
  };

  return (
    <div data-testid={TestId.COMPONENT_ID} className={styles.background}>
      <main className={styles.main}>
        <div data-testid={TestId.CONTENT_ID} className={styles.content}>
          <section className={styles.left}>
            <img data-testid={TestId.IMAGE_ID} src={aisha} alt="aisha" className={styles.aisha} />
            <div className={styles.quote}>
              <div className={styles.message}>
                <p className={styles.aishaQuote}>{constants.aisha}</p>
                <p className={styles.name}>{constants.name}</p>
                <img src={quoteLeft} alt="quote" className={styles.quoteLeft} />
                <img src={quoteRight} alt="quote" className={styles.quoteRight} />
              </div>
            </div>
          </section>
          <section className={styles.right}>
            <section className={styles.formContainer}>
              <div className={styles.heading}>
                <Header dataTest={TestId.HEADER_ID} className={styles.title}>
                  {constants.title}
                </Header>
                <Text dataTest={TestId.TEXT_ID} content={constants.subtitle} className={styles.subtitle} />
              </div>
              <div data-testid={TestId.FORM_ID} className={styles.form}>
                <div className={styles.alt}>
                  <Input
                    type="text"
                    value={userData.fullname}
                    disabled={toggle}
                    required={false}
                    label="First name and last name"
                    placeholder="First Name and Last Name"
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, fullname: e.target.value }));
                    }}
                    className={toggle && `${styles.fullname}`}
                  />
                  <div className={styles.toggleContainer}>
                    <p className={styles.anon}>{constants.anonymous}</p>
                    <div onClick={() => setToggle((prev) => !prev)} className={toggle ? `${styles.toggle} ${styles.toggleAlt}` : `${styles.toggle}`}>
                      <div className={toggle ? `${styles.ballAlt}` : `${styles.ball}`} />
                    </div>
                  </div>
                </div>
                <Input
                  value={userData.email}
                  onChange={(e) => {
                    setUserData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  type="email"
                  label="Email Address"
                  placeholder="Enter Email Address"
                  required={false}
                />
                {toggle && (
                  <Input
                    value={userData.company}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, company: e.target.value }));
                    }}
                    required={false}
                    label="Company Name (if applicable)"
                    placeholder="Enter company name"
                  />
                )}
                <Input
                  value={userData.phone}
                  onChange={(e) => {
                    setUserData((prev) => ({ ...prev, phone: e.target.value }));
                  }}
                  required={false}
                  element={phoneInfo}
                  type="number"
                  label="Phone Number"
                  placeholder="Enter Phone number"
                />
                <Input
                  data-testid={TestId.AMOUNT_ID}
                  value={amount}
                  required={false}
                  type="number"
                  label="Amount"
                  placeholder="NGN"
                  onChange={handleAmountChange}
                />
              </div>
              <div className={styles.btnContainer}>
                <Button
                  dataTest={TestId.BUTTON_ID}
                  label={`${'Donate'} ₦${formattedNumber}`}
                  onClick={handleDonation}
                  type="secondary"
                  effectClass={styles.effect}
                  className={styles.btn}
                />
              </div>
            </section>
            <p className={styles.footnote}>{constants.quote}</p>
          </section>
        </div>
      </main>
      <UseModal isActive={redirectModal}>
        <RedirectModal />
      </UseModal>
      <UseModal isActive={transactionModal}>
        <TransactionModal title={title} message={message}  handleTransactionModal={handleTransactionModal} />
      </UseModal>
    </div>
  );
};
