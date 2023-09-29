import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  email: '',
  id: null,
  isAdmin: false,
  name: ''
};

const user = createSlice({
  name: 'Application',
  initialState,
  reducers: {
    storeUser: (state, action) => {
      const { email, id, isAdmin, name } = action.payload;
      state.email = email;
      state.id = id;
      state.isAdmin = isAdmin;
      state.name = name;
    }
  }
});

export default user.reducer;
export const { storeUser } = user.actions;
