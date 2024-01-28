import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Step1Application from '../../components/ApplicationSteps/Step1Application';
import Step2Application from '../../components/ApplicationSteps/Step2Application';
import Step3Application from '../../components/ApplicationSteps/Step3Application';
import Step4Application from '../../components/ApplicationSteps/Step4Application';
import Step5Application from '../../components/ApplicationSteps/Step5Application';
import EmailVerified from '../../components/ApplicationSteps/Step5Application/Internals/EmailVerified';
import Stepper from '../../components/Stepper';
import Container from '../../components/Container';
import styles from './RequestStipend.module.css';
import { Hero3 } from '../../assets';

export const RequestStipend = () => {
  const { activeStep, newApplication } = useSelector((state) => state.application);
  const { isVerified } = useSelector((state) => state.user);
  const [verificationModal, setVerificationModal] = useState(false);

  useEffect(() => {
    const searchParams = window.location.search.split('=')[1];
    if (searchParams) {
      setVerificationModal(true);
    }
  }, [setVerificationModal]);

  const renderBanner = () => {
    if (!isVerified && newApplication) {
      return <div className={styles.banner}>Your account is currently unverified</div>;
    }
  };
  return (
    <div className={styles.main}>
      {renderBanner()}
      <Stepper activeStep={activeStep} />
      <Container alternate>
        <section>
          {(() => {
            switch (activeStep) {
              case 1:
                return <Step1Application />;
              case 2:
                return <Step2Application />;
              case 3:
                return <Step3Application />;
              case 4:
                return <Step4Application />;
              case 5:
                return <Step5Application />;
              default:
                return <Step1Application />;
            }
          })()}
        </section>
      </Container>
      <section className={styles.imgContainer}>
        <img src={Hero3} alt="girl_smiling" className={styles.img} />
      </section>
      {verificationModal ? <EmailVerified /> : undefined}
    </div>
  );
};
