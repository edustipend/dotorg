import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 5,
  stipendCategory: '',
  reasonForRequest: '',
  stepsTakenToEaseProblem: '',
  potentialBenefits: '',
  futureHelpFromUser: '',
  success: true,
  isVerified: false
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
      state.isVerified = action.payload
    }
  }
});

export default application.reducer;
export const { back, progress, category, reason, steps, benefits, futureHelp, successful, emailVerification } = application.actions;
