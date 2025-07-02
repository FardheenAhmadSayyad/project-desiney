// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../global/utils';
import CryptoJS from 'crypto-js';

const initialState = {
  info: {},
  error: false,
  errormessage: '',
  loading: false,
};

export const login = createAsyncThunk(
  'user/login',
  async ({ mobile, otp }, { rejectWithValue }) => {
    try {
      const response = await apiRequest('POST', '/admin/login', { mobile, otp });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || 'Login failed');
    }
  }
);

export const signup = createAsyncThunk(
  'user/signup',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await apiRequest('POST', '/customer-register', formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || 'Signup failed');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.info = {};
      localStorage.removeItem('log');
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errormessage = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
        if (action.payload?.token) {
          const encrypted = CryptoJS.AES.encrypt(
            JSON.stringify(action.payload.token),
            'secret key 123'
          ).toString();
          localStorage.setItem('log', encrypted);
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errormessage = action.payload;
      })

      // Signup
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.errormessage = '';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        // handle signup success (optional: auto-login or navigate)
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errormessage = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
