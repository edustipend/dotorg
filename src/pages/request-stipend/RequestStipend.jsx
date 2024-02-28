import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EmailVerified from '../../components/ApplicationSteps/Step5Application/Internals/EmailVerified';
import Stepper from '../../components/Stepper';
import Container from '../../components/Container';
import styles from './RequestStipend.module.css';
import { Hero3 } from '../../assets';
import { constant } from './constants';
import RequestSteps from './internals/RequestSteps';
import { Navigate } from 'react-router-dom';
import useApplicationWindowStatus from '../../hooks/useApplicationWindow';

export const RequestStipend = () => {
  const { activeStep, newApplication } = useSelector((state) => state.application);
  const { userId, isVerified } = useSelector((state) => state.user);
  const [verificationModal, setVerificationModal] = useState(false);
  const isWindowClosed = useApplicationWindowStatus();

  useEffect(() => {
    const searchParams = window.location.search.split('=')[1];
    if (searchParams) {
      setVerificationModal(true);
    }
  }, [setVerificationModal]);

  const renderBanner = () => {
    if (!isVerified && newApplication) {
      return <div className={styles.banner}>{constant.PROMPT}</div>;
    }
  };

  if (isWindowClosed) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.main}>
      {renderBanner()}
      <Stepper activeStep={activeStep} />
      <Container alternate>
        <RequestSteps userId={userId} activeStep={activeStep} />
      </Container>
      <section className={styles.imgContainer}>
        <img src={Hero3} alt="girl_smiling" className={styles.img} />
      </section>
      {verificationModal ? <EmailVerified /> : undefined}
    </div>
  );
};
