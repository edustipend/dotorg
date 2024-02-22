import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StepperCtx = createContext();

export const StepperCtxProvider = ({ children }) => {
  const [activeStep, setActiveStep] = useState(1);

  const value = { activeStep, setActiveStep };

  return <StepperCtx.Provider value={value}>{children}</StepperCtx.Provider>;
};

StepperCtxProvider.propTypes = {
  children: PropTypes.node
};
