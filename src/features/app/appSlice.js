import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    login: false,
  },
  reducers: {
    toggleLogin: (state) => {
      state.login = !state.login;
    },
  },
});

export const { toggleLogin } = appSlice.actions;

export const selectLogin = (state) => state.app.login;

export default appSlice.reducer;
