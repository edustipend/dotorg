import { configureStore } from '@reduxjs/toolkit';
import requestApplication from '../redux/ApplicationReducer/ApplicationRuducer'

// Example - This should be cleaned up
import { createSlice } from '@reduxjs/toolkit';
const initialState = { value: 0 };
const counterReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    application: requestApplication,
  }
});

export default store;
