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
import usePageView from '../../hooks/usePageView';
import { DONATION, postData } from '../../services/ApiClient';
import toast from 'react-hot-toast';
import useDonationPrompt from '../../hooks/useDonationPrompt';

const UTM_CAMPAIGN_SOURCE = 'utm_source';
const UTM_REFERRER = 'utm_referrer';
const PHONE_NUMBER_REGEX = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;

export const DonateNow = () => {
  usePageView('Donate');
  const nav = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const { value } = location.state || { value: 1000 };
  const [amount, setAmount] = useState(value);
  const [userData, setUserData] = useState(initial);
  const [displayModal, setDisplayModal] = useState(false);
  const formattedNumber = formatNumber(amount);
  const { redirectModal, handleRedirectModal } = useContext(ModalContext) || {};
  const { fullname, email, phone, company, toggleAnonymous, invalidPhoneNumber, focus, title, message, error, errorMessage } = userData;
  const { currentText, nextText, swapText, setSwapText } = useDonationPrompt(amount);

  /**
   * On success or On failure, flutterwave redirects the user to the specified route with two params attached
   * E.g base/support-a-learner/donate?status=cancelled&tx_ref=edustipend-txref-z5EWyXkjJrVrCDMdECqc5
   * Additional we want to also clean the url after extracting the information we need.
   *
   * after reading the status of the transcation, we need to clean up our url string.
   */
  const cleanURL = useCallback(
    (deleteUtmParams) => {
      for (const key of params.keys()) {
        if (deleteUtmParams) {
          params.delete(UTM_REFERRER);
          params.delete(UTM_CAMPAIGN_SOURCE);
        } else if (key !== UTM_REFERRER && key !== UTM_CAMPAIGN_SOURCE) {
          params.delete(key);
        }
      }
      nav({ search: params.toString() }, { replace: true });
    },
    [nav, params]
  );
  //a random uuid used to generate an email address for anon
  const uuid = window?.crypto?.randomUUID();
  const handleFocus = (setUserData, focus) => {
    setUserData((prev) => ({ ...prev, focus: !focus }));
  };

  const handleBlur = (setUserData, focus) => {
    setUserData((prev) => ({ ...prev, focus: !focus }));
  };

  //input value should not be greater than 500000
  const handleAmountChange = (e) => {
    setSwapText(false);
    const max = 500000;
    const value = e.target.value;
    if (value >= 0 && value <= max) {
      setAmount(handleValidAmount(value) ?? 0);
    }
  };

  const handleValidAmount = (amt) => {
    const cleanedAmount = Number(amt)
      ?.toString()
      ?.replace(/[^0-9.]/g, '');
    const amount = parseFloat(cleanedAmount);
    if (isNaN(amount)) return;
    return amount;
  };

  const invalidInput = (message) => {
    setUserData((prev) => ({ ...prev, errorMessage: message }));
  };

  const handleValidation = () => {
    switch (true) {
      case amount < 1000 || amount > 500000:
        invalidInput(constants.invalidAmount);
        return false;
      case fullname.length < 3:
        invalidInput(constants.invalidName);
        return false;
      case !toggleAnonymous && !checkEmail(email):
        invalidInput(constants.invalidEmail);
        return false;
      case !PHONE_NUMBER_REGEX.test(phone):
        invalidInput(constants.invalidPhoneNumber);
        return false;
      default:
        setUserData((prev) => ({ ...prev, errorMessage: '' }));
        return true;
    }
  };

  const handleValidationAnon = () => {
    if (amount < 1000) {
      invalidInput(constants.invalidAmount);
      return;
    }
    return true;
  };

  const handleDonation = async () => {
    if (toggleAnonymous ? !handleValidationAnon() : !handleValidation()) return;
    handleRedirectModal(true);

    const currentUrl = window.location.href;
    const urlObject = new URL(currentUrl);
    const urlWithoutParams = `${urlObject.origin}${urlObject.pathname}`;

    const response = await postData(`${DONATION}`, {
      amount: handleValidAmount(amount),
      redirect_url: urlWithoutParams,
      payment_options: 'card',
      currency: 'NGN',
      campaign: params?.get(UTM_CAMPAIGN_SOURCE) ?? '',
      referrer: params?.get(UTM_REFERRER) ?? '',
      customer: {
        email: toggleAnonymous ? `${uuid.substring(0, 10)}@edustipend.org` : email,
        name: fullname,
        phone_number: toggleAnonymous ? '' : phone
      },
      meta: {
        companyName: company
      }
    });

    try {
      const result = await response;
      if (result?.status) {
        setUserData(initial);
        handleRedirectModal(false);
        window.location.href = result?.data?.link;
      } else {
        handleRedirectModal(false);
        toast.error('Failed to connect');
      }
      cleanURL(true);
    } catch (error) {
      cleanURL(true);
      handleRedirectModal(false);
    }
  };

  //Render either the success or error modal then delete the params.
  const handleFeedback = useCallback(() => {
    let status = '';
    if (params.has('status')) {
      status = params.get('status');
      if (status === 'successful' || status === 'completed') {
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

    cleanURL();
  }, [params, setUserData, cleanURL]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleFeedback();
    }, 800);
    return () => clearTimeout(timeout);
  }, [handleFeedback]);

  useEffect(() => {
    if (toggleAnonymous) {
      setUserData((prev) => ({ ...prev, fullname: 'Anonymous' }));
    } else {
      setUserData((prev) => ({ ...prev, fullname: '' }));
    }
  }, [toggleAnonymous]);

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
                    disabled={toggleAnonymous}
                    required={false}
                    label={constants.fullName}
                    placeholder={constants.fullName}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, fullname: e.target.value }));
                    }}
                  />
                  <div className={styles.toggleContainer}>
                    <p className={styles.anon}>{constants.anonymous}</p>
                    <div
                      onClick={() => setUserData((prev) => ({ ...prev, toggleAnonymous: !toggleAnonymous }))}
                      className={toggleAnonymous ? `${styles.toggle} ${styles.toggleAlt}` : `${styles.toggle}`}
                    >
                      <div className={toggleAnonymous ? `${styles.ballAlt}` : `${styles.ball}`} />
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
                  disabled={toggleAnonymous}
                  required={false}
                />
                <Input
                  value={company}
                  onChange={(e) => {
                    setUserData((prev) => ({ ...prev, company: e.target.value }));
                  }}
                  required={false}
                  label={constants.company}
                  placeholder={constants.company_name}
                  disabled={toggleAnonymous}
                />
                <div className={styles.phoneContainer}>
                  <Input
                    value={phone.toString()}
                    onChange={(e) => {
                      setUserData((prev) => ({ ...prev, phone: e.target.value }));
                      phone.trim().length < 1
                        ? setUserData((prev) => ({ ...prev, invalidPhoneNumber: true }))
                        : setUserData((prev) => ({ ...prev, invalidPhoneNumber: false }));
                    }}
                    required={false}
                    element={phoneInfo}
                    type={constants.number}
                    label={constants.Phone_number}
                    placeholder={constants.Enter_Phone_number}
                    disabled={toggleAnonymous}
                  />
                  {!toggleAnonymous && (
                    <small className={`${styles.small} ${styles.smallAlt}`}>{invalidPhoneNumber && constants.invalidPhoneNumber}</small>
                  )}
                </div>
                <div>
                  <Input
                    data-testid={TestId.AMOUNT_ID}
                    value={Number(amount)
                      ?.toString()
                      ?.replace(/[^0-9].,,/g, '')}
                    required={false}
                    currency="NGN"
                    type={constants.number}
                    label={constants.Amount}
                    placeholder={constants.NGN}
                    onChange={handleAmountChange}
                  />
                  {!swapText ? <p className={styles.animText}>{currentText}</p> : <p className={styles.animTextAlt}>{nextText}</p>}
                </div>
              </div>
              <div className={styles.btnContainer}>
                {!toggleAnonymous && <small className={styles.small}>{errorMessage}</small>}
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
