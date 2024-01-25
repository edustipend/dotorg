import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: '',
  isAdmin: false,
  isAuthenticated: false,
  isVerified: false,
  name: '',
  userId: null
};

const user = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { email, id, isAdmin, name, isVerified } = action.payload;
      state.email = email;
      state.userId = id;
      state.isAdmin = isAdmin;
      state.name = name;
      state.isVerified = isVerified;
    },
    logout: (state) => {
      state.email = '';
      state.userId = null;
      state.isAdmin = false;
      state.name = '';
      state.isVerified = false;
      state.isAuthenticated = false;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export default user.reducer;
export const { storeUser, logout, setAuthenticated } = user.actions;
