import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const userSlice = createSlice({
  name: "user-login",
  initialState,
  reducers: {
    getLoginData: (state, action) => {
      state.push(action.payload);
    },
    logout: (state) => {
      state = [];
    },
    selectedUser: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { getLoginData, selectedUser, logout } = userSlice.actions;

export default userSlice.reducer;
