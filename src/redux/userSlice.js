import { createSlice, createAsyncThunk, thunkAPI } from '@reduxjs/toolkit';
//import Config from '../../global/config';
//import { apiRequest } from '../../global/utils';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate
var CryptoJS = require("crypto-js");


const initialState = {
  info: {},
  error: false,
  errormessage: '',
  roleData: {}
}

export const login = createAsyncThunk(
  'login', async ({ email, password }) => {

    const username = email;
console.log(username);

    try {

     //Api
   
    }
    catch (error) {
     
    }

  });



    }
    catch (error) {
      console.log((error.response) ? error.response : error);
     if(error.response.data=="ERROR: Fetch staff: staff not exist."){
      localStorage.clear();
      if (userData.push) userData.push('/login');
     }
    }

  });
export const getUser = createAsyncThunk(
  'getuser', async (push, fetch, firstLogin = false) => {
    
    try {
     //ApiName
     
      //return response.data;


    }
    catch (error) {
      console.log((error.response) ? error.response : error);
      console.log(error.response.status);
      if(error.response.status==400){
        if(error.response.data=="ERROR: Fetch staff: staff not exist."){
          push("/login");
        }
      }
      else if(error.response.status==502){
        push("/login");
      }
    }


  });





const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {

    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array

      if (action.payload) {
        state.info = action.payload.data;
        const key = "f34b6f0266218f283317397a716b68e0";
        const info = JSON.stringify(action.payload.data.detail.apiKey);
       
        const cipherText = CryptoJS.AES.encrypt(info, 'secret key 123').toString();
        localStorage.setItem('log', cipherText);


      }

    });
    builder.addCase(login.rejected, (state, action) => {

      state.error = true;

      state.errormessage = "Invalid username/password";
    });



    builder.addCase(getUser.pending, (state, action) => {

    });
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUser.fulfilled, (state, action) => {
      // Add user to the state array
    
      state.roleData = action.payload.staff_detail;
     
    });
    builder.addCase(getUser.rejected, (state, action) => {

      state.error = true;

      state.errormessage = "Invalid username/password";
    });

  },
})



export default usersSlice.reducer;