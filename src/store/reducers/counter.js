import { useDispatch, useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { counterSelector } from "../selectors";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const useCounter = () => {
  const dispatch = useDispatch();

  const { increment } = counterSlice.actions;

  return {
    counter: useSelector(counterSelector),
    increment: () => dispatch(increment()),
  };
};

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
