import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: '',
  userId: null,
  isAdmin: false,
  name: '',
  isAuthenticated: false
};

const user = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { email, id, isAdmin, name } = action.payload;
      state.email = email;
      state.userId = id;
      state.isAdmin = isAdmin;
      state.name = name;
    },
    logout: (state) => {
      state.email = '';
      state.userId = null;
      state.isAdmin = false;
      state.name = '';
      state.isAuthenticated = false;
    },
    isAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export default user.reducer;
export const { storeUser, logout, isAuthenticated } = user.actions;
