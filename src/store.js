import { configureStore } from '@reduxjs/toolkit';
import user from './redux/userSlice'; // <-- corrected path

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;