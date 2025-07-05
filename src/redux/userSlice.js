// File: redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  justSignedUp: false, // NEW
  loading: false,
  error: false,
  errormessage: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpSuccess: (state, action) => {
      state.isAuthenticated = false;
      state.user = action.payload;
      state.justSignedUp = true;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.justSignedUp = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.justSignedUp = false;
    },
    resetAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.justSignedUp = false;
      state.loading = false;
      state.error = false;
      state.errormessage = "";
    }
  }
});

export const { loginSuccess, signUpSuccess, logout, resetAuth } = userSlice.actions;
export default userSlice.reducer;
