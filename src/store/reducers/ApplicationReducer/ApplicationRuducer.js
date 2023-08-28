import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 4,
  stipendCategory: '',
  reasonForRequest: '',
  stepsTakenToEaseProblem: '',
  potentialBenefits: '',
  futureHelpFromUser: '',
  success: true
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
    }
  }
});

export default application.reducer;
export const { back, progress, category, reason, steps, benefits, futureHelp, successful } = application.actions;
