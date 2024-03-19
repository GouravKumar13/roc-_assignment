"use client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userDataProps = {
  email: string;
  password: string;
  id: string;
};

type initialStateType = {
  status: boolean;
  userData: userDataProps | null;
};

const initialState: initialStateType = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userDataProps>) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
