import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import styles from './DonateNow.module.css';
import { aishaPng, info, infoArrow, quoteLeft, quoteRight } from '../../assets';
import { TestId, constants, initial } from './constants';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { UseModal } from '../../components/Modal/UseModal';
import RedirectModal from './internals/redirectModal';
import TransactionModal from './internals/transactionModal';
import { ModalContext } from '../../context/ModalContext';
import formatNumber from '../../utils/numberFormatter';
import { checkEmail } from '../../utils/EmailChecker/emailChecker';
import { postData } from '../../services/ApiClient';
import { getEnvironment } from '../../utils/getEnvironment';

export const DonateNow = () => {
  const nav = useNavigate();
  const location = useLocation();
  const currentEnv = getEnvironment();
  const [params] = useSearchParams();
  const { value } = location.state || { value: 1000 };
  const [amount, setAmount] = useState(value);
  const [userData, setUserData] = useState(initial);
  const [displayModal, setDisplayModal] = useState(false);
  const formattedNumber = formatNumber(amount);
  const { redirectModal, handleRedirectModal } = useContext(ModalContext) || {};
  const { fullname, email, phone, company, toggleShowName, focus, title, message, error, errorMessage } = userData;



  const handleFocus = (setUserData, focus) => {
    setUserData((prev) => ({ ...prev, focus: !focus }));
  };

  const handleBlur = (setUserData, focus) => {
    setUserData((prev) => ({ ...prev, focus: !focus }));
  };

  //input value should not be greater than 1000000
  const handleAmountChange = (e) => {
    const max = 1000000;
    const value = e.target.value;
    if (value >= 0 && value <= max) {
      setAmount(value);
    }
  };

  const handleValidation = () => {
    switch (true) {
      case amount < 1000:
        invalidInput(constants.invalidAmount);
        return false;
      case fullname.length < 3:
        invalidInput(constants.invalidName);
        return false;
      case phone.length < 11:
        invalidInput(constants.Enter_Phone_number);
        return false;
      case !checkEmail(email):
        invalidInput(constants.invalidEmail);
        return false;
      default:
        setUserData((prev) => ({ ...prev, errorMessage: '' }));
        return true;
    }
  };

  const invalidInput = (message) => {
    setUserData((prev) => ({ ...prev, errorMessage: message }));
  };

  const handleDonation = async () => {
    if (!handleValidation()) return;
    handleRedirectModal();

    const response = await postData('donate', {
      amount: amount,
      redirect_url: currentEnv ? constants.redirect_prod : constants.redirect_dev,
      payment_options: 'card',
      currency: 'NGN',
      customer: {
        email: email,
        name: fullname,
        phonenumber: phone
      }
    });
    const result = await response;
    if (result?.status) {
      setUserData(initial);
      window.location.href = result?.data?.link;
    } else {
      handleRedirectModal();
    }
  };

  //Render either the success or error modal then delete the params.
  const handleFeedback = useCallback(() => {
    let status = '';
    if (params.has('status')) {
      status = params.get('status');
      if (status === 'successful') {
        setUserData((prev) => ({
          ...prev,
          title: constants.donation_success_header,
          message: constants.donation_success
        }));
        setDisplayModal(true);
      } else {
        setUserData((prev) => ({
          ...prev,
          error: true,
          title: constants.donation_failed_header,
          message: constants.donation_failed
        }));
        setDisplayModal(true);
      }
    }

    /**
     * On success or On failure, flutterwave redirects the user to the specified route with two params attached
     * E.g base/support-a-learner/donate?status=cancelled&tx_ref=edustipend-txref-z5EWyXkjJrVrCDMdECqc5
     *
     * after reading the status of the transcation, we need to clean up our url string.
     */

    for (const key of params.keys()) {
      params.delete(key);
    }

    nav({ search: params.toString() }, { replace: true });
  }, [params, setUserData, nav]);

  useEffect(() => {
    handleFeedback();
  }, [handleFeedback]);

  useEffect(() => {
    if (toggleShowName) {
      setUserData((prev) => ({ ...prev, fullname: 'Anonymous' }));
    } else {
      setUserData((prev) => ({ ...prev, fullname: '' }));
    }
  }, [toggleShowName]);

  const phoneInfo = (
    <div className={styles.phoneInfo} onFocus={() => handleFocus(setUserData, focus)} onBlur={() => handleBlur(setUserData, focus)} tabIndex="0">
      <img src={info} alt="info" className={styles.img} />
      <div className={`${styles.info} ${focus && styles.infoFocus}`}>
        <p className={styles.titleInfo}>{constants.tooltip_title}</p>
        <p className={styles.subtitleInfo}>{constants.tooltip_subtitle}</p>
        <img src={infoArrow} alt="infoArrow" className={styles.infoArrow} />
      </div>
    </div>
  );

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
                    disabled={toggleShowName}
                    required={false}
                    label={constants.fullName}
                    placeholder={constants.fullName}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, fullname: e.target.value }));
                    }}
                    className={toggleShowName ? `${styles.fullname}` : ''}
                  />
                  <div className={styles.toggleContainer}>
                    <p className={styles.anon}>{constants.anonymous}</p>
                    <div
                      onClick={() => setUserData((prev) => ({ ...prev, toggleShowName: !toggleShowName }))}
                      className={toggleShowName ? `${styles.toggle} ${styles.toggleAlt}` : `${styles.toggle}`}>
                      <div className={toggleShowName ? `${styles.ballAlt}` : `${styles.ball}`} />
                    </div>
                  </div>
                </div>
                <Input
                  value={email}
                  onChange={(e) => {
                    setUserData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                  type={constants.email}
                  label={constants.Email_Address}
                  placeholder={constants.Enter_Email_Address}
                  required={false}
                />
                {toggleShowName && (
                  <Input
                    value={company}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, company: e.target.value }));
                    }}
                    required={false}
                    label={constants.company}
                    placeholder={constants.company_name}
                  />
                )}
                <Input
                  value={phone.toString()}
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
                <small className={styles.small}>{errorMessage}</small>
                <Button
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
      <UseModal isActive={displayModal}>
        <TransactionModal error={error} title={title} message={message} setDisplayModal={setDisplayModal} />
      </UseModal>
    </div>
  );
};
