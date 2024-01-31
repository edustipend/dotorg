import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeStep: 1,
  applicationId: null,
  stipendCategory: '',
  reasonForRequest: '',
  stepsTakenToEaseProblem: '',
  potentialBenefits: '',
  futureHelpFromUser: '',
  success: false,
  isVerified: false,
  error: false,
<<<<<<< HEAD
  errorMessage: '',
  newApplication: false
=======
  editMode: false,
  disableTextbox: false,
  errorMessage: ''
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
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
    setApplicationId: (state, action) => {
      state.applicationId = action.payload;
    },
    setEditMode: (state, action) => {
      state.editMode = action.payload;
    },
    setDisableTextbox: (state, action) => {
      state.disableTextbox = action.payload;
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
<<<<<<< HEAD
    setNewApplication: (state, action) => {
      state.newApplication = action.payload
    },
=======

>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
    reset: (state) => {
      state.activeStep = 1;
      state.applicationId = null;
      state.stipendCategory = '';
      state.reasonForRequest = '';
      state.stepsTakenToEaseProblem = '';
      state.potentialBenefits = '';
      state.futureHelpFromUser = '';
      state.success = false;
      state.isVerified = false;
      state.error = false;
      state.errorMessage = '';
<<<<<<< HEAD
      state.newApplication = false
=======
      state.editMode = false;
      state.editTextbox = false;
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
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
  reset,
<<<<<<< HEAD
  setNewApplication
=======
  setApplicationId,
  setEditMode,
  setDisableTextbox
>>>>>>> fa0c82d596bb977fec2b7006142d99dedca17d9e
} = application.actions;
