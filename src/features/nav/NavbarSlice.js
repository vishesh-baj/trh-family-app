import { createSlice } from "@reduxjs/toolkit";

let initialState = false;

const NavbarSlice = createSlice({
  name: "sidebar-toggler",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return !state;
    },
  },
});

export const { toggleSidebar } = NavbarSlice.actions;

export default NavbarSlice.reducer;
