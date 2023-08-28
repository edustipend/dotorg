import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Step5Application.module.css';
import { ModalContext } from '../../../context/ModalContext';
import Modal from '../../Modal';
import Button from '../../Button';
import ContentContainer from '../ContentContainer';
import Header from '../../../components/Header';
import Text from '../../Text';
import Quote from '../../../components/Quote';
import Submit from './Internals/Submit';
import EmailVerified from './Internals/EmailVerified';
import { back } from '../../../store/reducers/ApplicationReducer';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { BackArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { DancingEmoji } from '../../../assets';
const { HEADER, PARA1, PARA2, PARA3, PARA4, PARA5, PARA6, QUOTE } = constants;

export const Step5Application = () => {
  ScrollOnMount();
  const { setIsActive } = useContext(ModalContext);
  const [verificationModal, setVerificationModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = window.location.search.split('=')[1];
    if (searchParams) {
      setVerificationModal(true);
    }
  }, [setVerificationModal]);
  return (
    <>
      {verificationModal ? (
        <EmailVerified />
      ) : (
        <div>
          <ContentContainer>
            <div className={styles.headerContainer}>
              <Header className={styles.header}>{HEADER}</Header>
              <img src={DancingEmoji} alt="dancing_emoji" className={styles.emoji} />
            </div>
            <div className={styles.textContainer}>
              <Text content={PARA1} />
              <Text content={PARA2} />
              <Text content={PARA3} />
              <Text content={PARA4} />
              <div>
                <Text content={PARA5} />
                <Text content={PARA6} />
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button
                label={'Back'}
                icon={BackArrow}
                iconPosition={'back'}
                type={'plain'}
                effectAlt
                onClick={() => dispatch(back())}
                className={styles.btn}
              />
              <Button
                label={'Submit'}
                iconPosition={'front'}
                type={'secondary'}
                effectAlt
                onClick={() => setIsActive((prev) => !prev)}
                className={styles.btn}
              />
            </div>
          </ContentContainer>
          <section className="quoteContainer">
            <Quote content={QUOTE} className="quote quote2" />
          </section>
          <Modal>
            <Submit />
          </Modal>
        </div>
      )}
    </>
  );
};
