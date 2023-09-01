import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fullName: '',
  email: '',
  password: '',
  dateOfBirth: '',
  gender: '',
  stateOfOrigin: '',
  twitterHandle: '',
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
    twitterhandle: (state, action) => {
      state.twitterHandle = action.payload;
    },
    howdidyouhear: (state, action) => {
      state.howDidYouHear = action.payload;
    }
  }
});

export default userDetails.reducer;
export const { fullname, Email, Password, dateofbirth, Gender, stateoforigin, twitterhandle, howdidyouhear } =
  userDetails.actions;
