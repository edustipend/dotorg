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
import { back, successful, isError, reset } from '../../../store/reducers/ApplicationReducer';
import { ScrollOnMount } from '../ScrollOnMount/ScrollOnMount';
import { BackArrow } from '../../../assets';
import { constants } from './Internals/constants';
import { DancingEmoji } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { EDIT_APPLICATION, NEW_APPLICATION, authorizedPost } from '../../../services/ApiClient';
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

  const newApplication = {
    userId,
    stipendCategory: Category,
    reasonForRequest,
    stepsTakenToEaseProblem,
    potentialBenefits,
    futureHelpFromUser
  };

  const editedApplication = {
    applicationId,
    ...newApplication
  };

  const submitStipendApp = async () => {
    setIsLoading(true);
    const APPLICATION_INFO = editMode ? editedApplication : newApplication;
    const ROUTE = editMode ? EDIT_APPLICATION : NEW_APPLICATION;
    editMode ? toast.loading('Submitting edited application', { id: 'edit-app' }) : toast.loading('Submitting new application', { id: 'new-app' });

    try {
      const res = await authorizedPost(ROUTE, APPLICATION_INFO);
      if (res.success) {
        editMode ? toast.success(res?.message || 'Updated successfully') : toast.success(res?.message || 'Submitted successfully');
      } else {
        toast.error(res?.message || res?.error || 'OOPS! Something went wrong.');
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message || 'OOPS! Something went wrong.');
    } finally {
      toast.dismiss('edit-app');
      toast.dismiss('new-app');
      setIsLoading(false);
      dispatch(reset());
      nav('/dashboard');
    }
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
