import { useState } from 'react';
import Step1Application from '../../sections/Step1Application';
import Step2Application from '../../sections/Step2Application';
import Step3Application from '../../sections/Step3Application';
import Step4Application from '../../sections/Step4Application';
import Step5Application from '../../sections/Step5Application';
import Stepper from '../../components/Stepper';
import StartApplication from '../../sections/StartApplication';

export const RequestStipend = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <main>
      {/*
				Place request stipend components here
        
			 */}
      <Stepper />
      <StartApplication />
      <section>
        {(() => {
          switch (activeStep) {
            case 1:
              return <Step1Application setActiveStep={setActiveStep} />;
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
    </main>
  );
};
