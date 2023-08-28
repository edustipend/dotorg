import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    monthOfBirth: '',
    dayOfBirth: '',
    yearOfBirth: '',
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
            state.fullName = action.payload
        },
        Email: (state, action) => {
            state.email = action.payload;
        },
        Password: (state, action) => {
            state.password = action.payload;
        },
        monthofbirth: (state, action) => {
            state.monthOfBirth = action.payload
        },
        dayofbirth: (state, action) => {
            state.dayOfBirth = action.payload
        },
        yearofbirth: (state, action) => {
            state.yearOfBirth = action.payload
        },
        Gender: (state, action) => {
            state.gender = action.payload
        },
        stateoforigin: (state, action) => {
            state.stateOfOrigin = action.payload
        },
        twitterhandle: (state, action) => {
            state.twitterHandle = action.payload
        },
        howdidyouhear: (state, action) => {
            state.howDidYouHear = action.payload
        }
    }
});

export default userDetails.reducer;
export const { fullname, Email, Password, monthofbirth, dayofbirth, yearofbirth, Gender, stateoforigin, twitterhandle, howdidyouhear } = userDetails.actions;
