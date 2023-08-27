import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userDetails = createSlice({
    name: 'Application',
    initialState,
    reducers: {
        fullName: (state, action) => {
            state.FullName = action.payload
        },
        email: (state, action) => {
            state.Email = action.payload;
        },
        password: (state, action) => {
            state.Password = action.payload;
        },
        monthOfBirth: (state, action) => {
            state.MonthOfBirth = action.payload
        },
        dayOfBirth: (state, action) => {
            state.DayOfBirth = action.payload
        },
        yearOfBirth: (state, action) => {
            state.YearOfBirth = action.payload
        },
        gender: (state, action) => {
            state.Gender = action.payload
        },
        stateOfOrigin: (state, action) => {
            state.StateOfOrigin = action.payload
        },
        twitterHandle: (state, action) => {
            state.TwitterHandle = action.payload
        },
        howDidYouHear: (state, action) => {
            state.HowDidYouHear = action.payload
        }
    }
});

export default userDetails.reducer;
export const { fullName, email, password, monthOfBirth, dayOfBirth, yearOfBirth, gender, stateOfOrigin, twitterHandle, howDidYouHear } = userDetails.actions;
