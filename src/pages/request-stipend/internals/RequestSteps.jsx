import PropTypes from 'prop-types';
import Step1Application from '../../../components/ApplicationSteps/Step1Application';
import Step2Application from '../../../components/ApplicationSteps/Step2Application';
import Step3Application from '../../../components/ApplicationSteps/Step3Application';
import Step4Application from '../../../components/ApplicationSteps/Step4Application';
import Step5Application from '../../../components/ApplicationSteps/Step5Application';

const RequestSteps = ({ userId, activeStep }) => {
  return (
    <section>
      {!userId
        ? (() => {
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
          })()
        : (() => {
            switch (activeStep) {
              case 1:
                return <Step1Application />;
              case 2:
                return <Step2Application />;
              case 3:
                return <Step5Application />;
              default:
                return <Step1Application />;
            }
          })()}
    </section>
  );
};

export default RequestSteps;

RequestSteps.propTypes = {
  userId: PropTypes.string,
  activeStep: PropTypes.number
};
