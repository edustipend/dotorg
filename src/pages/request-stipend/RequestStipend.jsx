import { useState } from 'react';
import Step1Application from '../../sections/ApplicationSteps/Step1Application';
import Step2Application from '../../sections/ApplicationSteps/Step2Application';
import Step3Application from '../../sections/ApplicationSteps/Step3Application';
import Step4Application from '../../sections/ApplicationSteps/Step4Application';
import Step5Application from '../../sections/ApplicationSteps/Step5Application';
import Stepper from '../../components/Stepper';
import Container from '../../components/Container';
import styles from './RequestStipend.module.css';
import { Hero3 } from '../../assets';

export const RequestStipend = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className={styles.main}>
      <Stepper activeStep={activeStep} />
      <Container alternate>
        <section>
          {(() => {
            switch (activeStep) {
              case 1:
                return <Step1Application setActiveStep={setActiveStep} />;
              case 2:
                return <Step2Application setActiveStep={setActiveStep} />;
              case 3:
                return <Step3Application setActiveStep={setActiveStep} />;
              case 4:
                return <Step4Application setActiveStep={setActiveStep} />;
              case 5:
                return <Step5Application setActiveStep={setActiveStep} />;
              default:
                return <Step1Application setActiveStep={setActiveStep} />;
            }
          })()}
        </section>
      </Container>
      <section className={styles.imgContainer}>
        <img src={Hero3} alt="girl_smiling" className={styles.img} />
      </section>
    </div>
  );
};
