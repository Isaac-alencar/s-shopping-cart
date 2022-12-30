import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './domain/counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})