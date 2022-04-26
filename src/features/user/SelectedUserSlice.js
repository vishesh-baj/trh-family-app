import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const SelectedUserSlice = createSlice({
  name: "selected-user",
  initialState,
  reducers: {
    getSelectedUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { getSelectedUser } = SelectedUserSlice.actions;
export default SelectedUserSlice.reducer;
