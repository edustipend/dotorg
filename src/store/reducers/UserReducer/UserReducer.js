import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  id: '',
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
