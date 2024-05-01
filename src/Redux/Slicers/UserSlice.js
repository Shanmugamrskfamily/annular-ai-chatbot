import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userRole: 'user'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate(state) {
      const token = localStorage.getItem('token');
      state.isAuthenticated = !!token;
    }
  }
});

export const { authenticate } = userSlice.actions;
export default userSlice.reducer;
