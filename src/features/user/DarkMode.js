import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const DarkModeSlice = createSlice({
  name: "dark-mode",
  initialState,
  reducers: {
    triggerDarkMode: (state) => {
      state = !state;
      return state;
    },
  },
});

export const { triggerDarkMode } = DarkModeSlice.actions;

export default DarkModeSlice.reducer;
