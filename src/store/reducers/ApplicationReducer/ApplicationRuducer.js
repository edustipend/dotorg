import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 1,
  stipendCategory: '',
  reasonForRequest: '',
  stepsTakenToEaseProblem: '',
  potentialBenefits: '',
  futureHelpFromUser: '',
  success: false,
  isVerified: false,
  error: false,
  errorMessage: ''
};

const application = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    back: (state) => {
      state.activeStep -= 1;
    },
    progress: (state) => {
      state.activeStep += 1;
    },
    setActiveStep: (state, action) => {
      state.activeStep = action.payload;
    },
    category: (state, action) => {
      state.stipendCategory = action.payload;
    },
    reason: (state, action) => {
      state.reasonForRequest = action.payload;
    },
    steps: (state, action) => {
      state.stepsTakenToEaseProblem = action.payload;
    },
    benefits: (state, action) => {
      state.potentialBenefits = action.payload;
    },
    futureHelp: (state, action) => {
      state.futureHelpFromUser = action.payload;
    },
    successful: (state, action) => {
      state.success = action.payload;
    },
    emailVerification: (state, action) => {
      state.isVerified = action.payload;
    },
    isError: (state, action) => {
      state.error = action.payload;
    },
    errMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    reset: (state) => {
      state.activeStep = 1;
      state.stipendCategory = '';
      state.reasonForRequest = '';
      state.stepsTakenToEaseProblem = '';
      state.potentialBenefits = '';
      state.futureHelpFromUser = '';
      state.success = false;
      state.isVerified = false;
      state.error = false;
      state.errorMessage = '';
    }
  }
});

export default application.reducer;
export const {
  back,
  progress,
  setActiveStep,
  category,
  reason,
  steps,
  benefits,
  futureHelp,
  successful,
  emailVerification,
  isError,
  errMessage,
  reset
} = application.actions;
