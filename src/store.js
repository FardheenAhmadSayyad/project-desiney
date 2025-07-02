import { legacy_createStore as createStore, combineReducers } from 'redux'
//import dashboardReducer from '../src/redux/dashboard/actions';
import { configureStore } from '@reduxjs/toolkit';
import user from './redux/user/userSlice';

const initialState = {
  sidebarShow: true,
  theme: 'light',
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}


const store = configureStore({
  reducer: {
    
    user: user,
    
  },
  changeState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),//add reducers here
})

export default store
