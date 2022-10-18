import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

// reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increamentCount: (state, action) => {
      state.counter += action.payload;
    },
    decreaseCount: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

// action to move to component to call
export const { increamentCount, decreaseCount } = counterSlice.actions;
