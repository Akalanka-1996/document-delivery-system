import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import requestReducer from '../features/request/requestSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    requests: requestReducer
  },
});
