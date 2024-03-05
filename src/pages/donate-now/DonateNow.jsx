import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './DonateNow.module.css';
import { aishaPng, info, infoArrow, quoteLeft, quoteRight } from '../../assets';
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
  const { redirectModal, transactionModal, handleToggleTransactionModal } = useContext(ModalContext) || {};
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
    handleToggleTransactionModal();
    setTitle(constants.donation_success_header);
    setMessage(constants.donation_success);
  };

  //input value should not be greater than 1000000
  const handleAmountChange = (e) => {
    const max = 1000000;
    const value = e.target.value;
    if (value >= 0 && value <= max) {
      setAmount(value);
    }
  };

  return (
    <div data-testid={TestId.COMPONENT_ID} className={styles.background}>
      <section className={styles.main}>
        <div data-testid={TestId.CONTENT_ID} className={styles.content}>
          <section className={styles.left}>
            <img data-testid={TestId.IMAGE_ID} src={aishaPng} alt="aisha" className={styles.aisha} />
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
                    type={constants.text}
                    value={userData.fullname}
                    disabled={toggle}
                    required={false}
                    label={constants.fullName}
                    placeholder={constants.fullName}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, fullname: e.target.value }));
                    }}
                    className={toggle ? `${styles.fullname}` : ''}
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
                  type={constants.email}
                  label={constants.Email_Address}
                  placeholder={constants.Enter_Email_Address}
                  required={false}
                />
                {toggle && (
                  <Input
                    value={userData.company}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, company: e.target.value }));
                    }}
                    required={false}
                    label={constants.company}
                    placeholder={constants.company_name}
                  />
                )}
                <Input
                  value={userData.phone.toString()}
                  onChange={(e) => {
                    setUserData((prev) => ({ ...prev, phone: e.target.value }));
                  }}
                  required={false}
                  element={phoneInfo}
                  type={constants.number}
                  label={constants.Phone_number}
                  placeholder={constants.Enter_Phone_number}
                />
                <Input
                  data-testid={TestId.AMOUNT_ID}
                  value={amount.toString()}
                  required={false}
                  type={constants.number}
                  label={constants.Amount}
                  placeholder={constants.NGN}
                  onChange={handleAmountChange}
                />
              </div>
              <div className={styles.btnContainer}>
                <Button
                  disabled={amount < 1000}
                  dataTest={TestId.BUTTON_ID}
                  label={`${'Donate'} ₦${formattedNumber}`}
                  onClick={handleDonation}
                  type={constants.secondary}
                  effectClass={styles.effect}
                  className={styles.btn}
                />
              </div>
            </section>
            <p className={styles.footnote}>{constants.quote}</p>
          </section>
        </div>
      </section>
      <UseModal isActive={redirectModal}>
        <RedirectModal />
      </UseModal>
      <UseModal isActive={transactionModal}>
        <TransactionModal title={title} message={message} handleToggleTransactionModal={handleToggleTransactionModal} />
      </UseModal>
    </div>
  );
};
