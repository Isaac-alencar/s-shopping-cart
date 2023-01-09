import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/cart'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})