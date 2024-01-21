import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import ContentContainer from '../ContentContainer';
import Header from '../../Header';
import handShake from '../../../assets/handShake.svg';
import Modal from '../../Modal';
import Consent from './Internals/Consent';
import { TestId, constants } from './Internals/constants';
import Button from '../../Button';
import { BackArrow, RightArrow } from '../../../assets';
import Quote from '../../Quote';
import styles from './Step3.module.css';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { ModalContext } from '../../../context/ModalContext';
import { back, progress } from '../../../store/reducers/ApplicationReducer';
const { HEADER, DATA_PRIVACY, ACKNOWLEDGE, ACCEPT, REJECT, QUOTE } = constants;

export const Step3Application = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const { setIsActive } = useContext(ModalContext) || {};

  //scroll to the top on step mount
  ScrollOnMount();

  const handleChange = (event) => {
    setSelectedOption(event?.target?.value);
  };

  //popup a prompt if the learner rejects else progress with the application
  const handleOnClick = () => {
    if (selectedOption === 'reject') {
      setIsActive((prev) => !prev);
      return;
    }
    dispatch(progress());
  };

  return (
    <>
      <ContentContainer dataTest={TestId.COMPONENT_TEST_ID}>
        <section className={styles.dataConsent}>
          <div className={styles.headerSection}>
            <Header dataTest={TestId.HEADER_ID} className={styles.header}>
              {HEADER}
            </Header>
            <img data-testid={TestId.IMG_ID} src={handShake} alt="handShake" className={styles.handShake} />
          </div>
          <p data-testid={TestId.DATA_PRIVACY_ID} className={styles.text}>
            {DATA_PRIVACY}
          </p>
          <div className={styles.acknowledge}>
            <p data-testid={TestId.ACKNOWLEDGE_ID} className={styles.text}>
              {ACKNOWLEDGE}
            </p>
            <div className={styles.options}>
              <label className={styles.label}>
                <input
                  data-testid={TestId.ACCEPT_ID}
                  type="radio"
                  value="accept"
                  checked={selectedOption === 'accept'}
                  className={styles.radioInput}
                  onChange={handleChange}
                />
                <span className={styles.custom_radio}>{ACCEPT}</span>
              </label>
              <label className={styles.label}>
                <input
                  data-testId={TestId.REJECT_ID}
                  type="radio"
                  value="reject"
                  checked={selectedOption === 'reject'}
                  className={styles.radioInput}
                  onChange={handleChange}
                />
                <span className={styles.custom_radio}>{REJECT}</span>
              </label>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button
              type={'plain'}
              label={'Back'}
              effectAlt
              icon={BackArrow}
              iconPosition={'back'}
              onClick={() => dispatch(back())}
              className={styles.btn}
            />
            <Button
              type={'secondary'}
              label={'Continue'}
              effectAlt
              icon={RightArrow}
              iconPosition={'front'}
              disabled={selectedOption.length > 0 ? false : true}
              onClick={handleOnClick}
              className={styles.btn}
            />
          </div>
        </section>
      </ContentContainer>
      <div className="quoteContainer">
        <Quote content={QUOTE} className="quote" />
      </div>
      <Modal>
        <Consent setIsActive={setIsActive} />
      </Modal>
    </>
  );
};
