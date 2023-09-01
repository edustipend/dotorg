import { configureStore } from '@reduxjs/toolkit';
import requestApplication from './reducers/ApplicationReducer/ApplicationRuducer';
import userDetails from './reducers/UserDetailsReducer/UserDetailsReducer';
import user from './reducers//UserReducer/UserReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

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

const config = {
  key: 'root',
  version: 1,
  storage
};

const reducer = combineReducers({
  counter: counterReducer,
  application: requestApplication,
  userDetails: userDetails,
  user: user
});

const presisted = persistReducer(config, reducer);

export const store = configureStore({
  reducer: presisted
});

export default store;
