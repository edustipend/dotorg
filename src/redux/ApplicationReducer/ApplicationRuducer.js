import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

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
    email: (state, action) => {
      state.email = action.payload;
    },
    category: (state, action) => {
      state.stipendCategory = action.payload;
    },
    reasonForRequest: (state, action) => {
      state.ReasonForRequest = action.payload;
    },
    stepsTaken: (state, action) => {
      state.StepsTakenToEaseProblem = action.payload;
    },
    potentialBenefits: (state, action) => {
      state.PotentialBenefits = action.payload;
    },
    futureHelp: (state, action) => {
      state.FutureHelpFromUser = action.payload;
    }
  }
});

export default application.reducer;
export const { back, progress, email, category, reasonForRequest, stepsTaken, potentialBenefits, futureHelp } = application.actions;
