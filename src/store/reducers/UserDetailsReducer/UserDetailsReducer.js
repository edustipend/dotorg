import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  stateOfOrigin: '',
  socialHandle: '',
  mediaHandle: '',
  howDidYouHear: ''
};

const userDetails = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    fullname: (state, action) => {
      state.fullName = action.payload;
    },
    Email: (state, action) => {
      state.email = action.payload;
    },
    Password: (state, action) => {
      state.password = action.payload;
    },
    dateofbirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    Gender: (state, action) => {
      state.gender = action.payload;
    },
    stateoforigin: (state, action) => {
      state.stateOfOrigin = action.payload;
    },
    howdidyouhear: (state, action) => {
      state.howDidYouHear = action.payload;
    },
    setSocialHandle: (state, action) => {
      state.socialHandle = action.payload;
    },
    setMediaHandle: (state, action) => {
      state.mediaHandle = action.payload;
    },
    resetDetails: (state) => {
      Object.assign(state, initialState);
    }
  }
});

export default userDetails.reducer;
export const { fullname, Email, Password, dateofbirth, Gender, stateoforigin, howdidyouhear, setSocialHandle, setMediaHandle, resetDetails } =
  userDetails.actions;
