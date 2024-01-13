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
<<<<<<< HEAD
    isAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
=======
    logout: (state) => {
      state.email = '';
      state.userId = null;
      state.isAdmin = false;
      state.name = '';
      state.isAuthenticated = false;
    },
    isAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
>>>>>>> 5690207569507f949c7cc025f037030b8066414d
    }
  }
});

export default user.reducer;
<<<<<<< HEAD
export const { storeUser, isAuthenticated } = user.actions;
=======
export const { storeUser, logout, isAuthenticated } = user.actions;
>>>>>>> 5690207569507f949c7cc025f037030b8066414d
