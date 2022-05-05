import { createSlice } from "@reduxjs/toolkit";
import { rolesDeveloper, rolesHR, rolesSales } from "../../db/roles";

// TODO: Add the specific filters for each role from api and show here
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
      state = { ...initialState, apiData: action.payload };

      return state;
    },
  },
});

export const { getUsers } = UserDataSlice.actions;

export default UserDataSlice.reducer;
