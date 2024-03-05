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
  errorMessage: '',
  newApplication: false,
  editMode: false,
  disableTextbox: false,
  hasApplied: false,
  currentApplication: null,
  viewBtnLabel: 'Edit Application',
  disableOneClickCTA: true
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
    setHasApplied: (state, action) => {
      state.hasApplied = action.payload;
    },
    setCurrentApplication: (state, action) => {
      state.currentApplication = action.payload;
    },
    setViewBtnLabel: (state, action) => {
      state.viewBtnLabel = action.payload;
    },
    setDisableOneClickCTA: (state, action) => {
      state.disableOneClickCTA = action.payload;
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
    setNewApplication: (state, action) => {
      state.newApplication = action.payload;
    },
    reset: (state) => {
      Object.assign(state, initialState);
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
  setNewApplication,
  setApplicationId,
  setEditMode,
  setDisableTextbox,
  setHasApplied,
  setCurrentApplication,
  setViewBtnLabel,
  setDisableOneClickCTA
} = application.actions;
