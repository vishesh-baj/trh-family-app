import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hr: [],
  dev: [],
  sales: [],
};

const UserDataSlice = createSlice({
  name: "user/data",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { getUsers } = UserDataSlice.actions;

export default UserDataSlice.reducer;
