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
import { back, successful, isError } from '../../../store/reducers/ApplicationReducer';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { BackArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { DancingEmoji } from '../../../assets';
import { useNavigate } from 'react-router-dom';
// import { authorizedPost } from '../../../services/ApiClient';
import toast from 'react-hot-toast';
const { HEADER, PARA1, PARA2, PARA3, PARA4, PARA5, PARA6, QUOTE } = constants;

export const Step5Application = () => {
  ScrollOnMount();
  const { setIsActive } = useContext(ModalContext);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { stipendCategory, reasonForRequest, stepsTakenToEaseProblem, potentialBenefits, futureHelpFromUser, editMode, applicationId } = useSelector(
    (state) => state.application
  );
  const { userId } = useSelector((state) => state.user);

  const onSubmit = () => {
    dispatch(successful(false));
    dispatch(isError(false));
    setIsActive((prev) => !prev);
  };

  const Category = stipendCategory.split('/')[0].toLowerCase();

  const applicationInfo = {
    userId,
    applicationId,
    stipendCategory: Category,
    reasonForRequest: reasonForRequest,
    stepsTakenToEaseProblem: stepsTakenToEaseProblem,
    potentialBenefits: potentialBenefits,
    futureHelpFromUser: futureHelpFromUser
  };

  const submitStipendApp = async () => {
    setIsLoading(true);
    console.log(applicationInfo);
    editMode ? toast.loading('Submitting edited application', { id: 'loading-toast' }) : toast.loading('Submitting new application');
    setTimeout(() => {
      toast.dismiss('loading-toast');
      toast.success('Updated successfully');
      setIsLoading(false);
      nav('/dashboard');
    }, 3000);
  };

  return (
    <>
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
              isLoading={isLoading}
              loaderSize={'small'}
              loaderVariant={'neutral'}
              onClick={userId ? submitStipendApp : onSubmit}
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
    </>
  );
};
