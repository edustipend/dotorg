import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: '',
  userId: null,
  isAdmin: false,
  name: ''
};

const user = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { email, userId, isAdmin, name } = action.payload;
      state.email = email;
      state.userId = userId;
      state.isAdmin = isAdmin;
      state.name = name;
    },
    logout: (state) => {
      state.email = '';
      state.userId = null;
      state.isAdmin = false;
      state.name = '';
    }
  }
});

export default user.reducer;
export const { storeUser,logout } = user.actions;
