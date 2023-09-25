import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EmailVerified from '../../components/ApplicationSteps/Step5Application/Internals/EmailVerified';
import Stepper from '../../components/Stepper';
import Container from '../../components/Container';
import styles from './RequestStipend.module.css';
import { Hero3 } from '../../assets';
import RequestSteps from './RequestSteps';

export const RequestStipend = () => {
  const { activeStep } = useSelector((state) => state.application);
  const [verificationModal, setVerificationModal] = useState(false);
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    const searchParams = window.location.search.split('=')[1];
    if (searchParams) {
      setVerificationModal(true);
    }
  }, [setVerificationModal]);

  return (
    <div className={styles.main}>
      <Stepper activeStep={activeStep} />
      <Container alternate>
        <RequestSteps id={id} activeStep={activeStep} />
      </Container>
      <section className={styles.imgContainer}>
        <img src={Hero3} alt="girl_smiling" className={styles.img} />
      </section>
      {verificationModal ? <EmailVerified /> : undefined}
    </div>
  );
};
