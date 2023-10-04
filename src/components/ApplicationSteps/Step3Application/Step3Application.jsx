import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import ContentContainer from '../ContentContainer';
import Header from '../../Header';
import handShake from '../../../assets/handShake.svg';
import Modal from '../../Modal';
import Consent from './Internals/Consent';
import { constants } from './Internals/constants';
import Button from '../../Button';
import { BackArrow, RightArrow } from '../../../assets';
import Quote from '../../Quote';
import styles from './Step3.module.css';
import { ModalContext } from '../../../context/ModalContext';
import { back, progress } from '../../../store/reducers/ApplicationReducer';
import { useScrollToTop } from '../../../ScrollToTop/ScrollToTop';
const { HEADER, DATA_PRIVACY, ACKNOWLEDGE, ACCEPT, REJECT, QUOTE } = constants;

export const Step3Application = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');
  const { setIsActive } = useContext(ModalContext);

  //scroll to the top on step mount
  const scrollOnRoute = useScrollToTop();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
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
    {scrollOnRoute}
      <ContentContainer>
        <section className={styles.dataConsent}>
          <div className={styles.headerSection}>
            <Header className={styles.header}>{HEADER}</Header>
            <img src={handShake} alt="handShake" className={styles.handShake} />
          </div>
          <p className={styles.text}>{DATA_PRIVACY}</p>
          <div className={styles.acknowledge}>
            <p className={styles.text}>{ACKNOWLEDGE}</p>
            <div className={styles.options}>
              <label className={styles.label}>
                <input type="radio" value="accept" checked={selectedOption === 'accept'} className={styles.radioInput} onChange={handleChange} />
                <span className={styles.custom_radio}>{ACCEPT}</span>
              </label>
              <label className={styles.label}>
                <input type="radio" value="reject" checked={selectedOption === 'reject'} className={styles.radioInput} onChange={handleChange} />
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
