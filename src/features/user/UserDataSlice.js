import { createSlice } from "@reduxjs/toolkit";
import { rolesDeveloper, rolesHR, rolesSales } from "../../db/roles";
const initialState = {
  hr: rolesHR,
  dev: rolesDeveloper,
  sales: rolesSales,
};

const UserDataSlice = createSlice({
  name: "user/data",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { getUsers } = UserDataSlice.actions;

export default UserDataSlice.reducer;
