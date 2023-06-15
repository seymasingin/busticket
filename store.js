import { configureStore } from '@reduxjs/toolkit'
import busReducer from './reducers/busSlice'
import authReducer from './reducers/authSlice'

export const store = configureStore({
  reducer: {
    buses: busReducer,
    auth: authReducer,
  },
})