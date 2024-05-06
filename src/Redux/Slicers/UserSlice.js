import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: 'user',
  token:null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(state) {
      const token = localStorage.getItem('token');
      state.token=token;
      console.log('State Token:',state.token);
      state.isAuthenticated = !!token;
    }
  }
});

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
