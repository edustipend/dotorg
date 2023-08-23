import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const requestApplication = createSlice({
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
            state.email = action.payload
        },
        category: (state, action) => {
            state.stipendCategory = action.payload
        },
    }
})

export default requestApplication.reducer
export const { back, progress, email, category } = requestApplication.actions