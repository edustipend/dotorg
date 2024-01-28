import React, { useState } from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Step5Application.module.css';
import { ModalContext } from '../../../context/ModalContext';
import Modal from '../../Modal';
import Button from '../../Button';
import ContentContainer from '../ContentContainer';
import Header from '../../../components/Header';
import Text from '../../Text';
import Quote from '../../../components/Quote';
import Submit from './Internals/Submit';
import { setActiveStep, back, successful, isError } from '../../../store/reducers/ApplicationReducer';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { BackArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { DancingEmoji } from '../../../assets';
import { authorizedPost } from '../../../services/ApiClient';
import { UseModal } from '../../Modal/UseModal';
import NewApplication from './Internals/NewApplication';
import useResendVerification from '../../../hooks/useResendVerification';
const { HEADER, PARA1, PARA2, PARA3, PARA4, PARA5, PARA6, QUOTE, NEW_APPLICATION_HEADER, NEW_APPLICATION_PARA1, NEW_APPLICATION_PARA2 } = constants;
export const Step5Application = () => {
  ScrollOnMount();
  const dispatch = useDispatch();
  const { newApplicationModal, handleNewApplicationModal } = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [prompt, setPrompt] = useState('');
  const { setIsActive } = useContext(ModalContext);
  const { userId, isVerified } = useSelector((state) => state.user);
  const { newApplication, reasonForRequest, stepsTakenToEaseProblem, stipendCategory, potentialBenefits, futureHelpFromUser } = useSelector(
    (state) => state.application
  );
  const { handleResendVerification } = useResendVerification();
  const onSubmit = () => {
    dispatch(successful(false));
    dispatch(isError(false));
    setIsActive((prev) => !prev);
  };

  const handleNewApplication = async () => {
    setLoading(true);
    try {
      const response = await authorizedPost('stipend/apply', {
        userId,
        futureHelpFromUser: futureHelpFromUser,
        potentialBenefits: potentialBenefits,
        reasonForRequest: reasonForRequest,
        stepsTakenToEaseProblem: stepsTakenToEaseProblem,
        stipendCategory: stipendCategory?.split('/')[0].toLowerCase()
      });
      setIsSuccess(response?.success);
      setMessage(response?.message);
      setLoading(false);
      if (!isVerified && response?.success) {
        handleResendVerification();
        setPrompt(constants.PROMPT);
      }
      handleNewApplicationModal();
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = () => {
    if (newApplication) {
      dispatch(setActiveStep(2));
    } else {
      dispatch(back());
    }
  };

  return (
    <>
      <div>
        <ContentContainer>
          <div className={styles.headerContainer}>
            <Header className={styles.header}>{newApplication ? NEW_APPLICATION_HEADER : HEADER}</Header>
            <img src={DancingEmoji} alt="dancing_emoji" className={styles.emoji} />
          </div>
          <div className={styles.textContainer}>
            <Text content={newApplication ? NEW_APPLICATION_PARA1 : PARA1} />
            <Text content={newApplication ? NEW_APPLICATION_PARA2 : PARA2} />
            <Text content={PARA3} />
            <Text content={PARA4} />
            <div>
              <Text content={PARA5} />
              <Text content={PARA6} />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button label={'Back'} icon={BackArrow} iconPosition={'back'} type={'plain'} effectAlt onClick={handleAction} className={styles.btn} />
            <Button
              label={'Submit'}
              iconPosition={'front'}
              type={'secondary'}
              effectAlt
              isLoading={loading}
              loaderSize="small"
              loaderVariant="neutral"
              onClick={newApplication ? handleNewApplication : onSubmit}
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
        <UseModal isActive={newApplicationModal}>
          <NewApplication isSuccess={isSuccess} message={message} prompt={prompt} />
        </UseModal>
      </div>
    </>
  );
};
