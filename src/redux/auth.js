import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

// reducer
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoginAction: (state) => {
      state.auth = true;
    },
    LogoutAction: (state) => {
      state.auth = false;
    },
  },
});

// action to move to component to call
export const { LoginAction, LogoutAction } = authSlice.actions;
