import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";
import DarkModeSlice from "../features/user/DarkMode";
import UserDataSlice from "../features/user/UserDataSlice";
import SelectedUserSlice from "../features/user/SelectedUserSlice";
import StateCitySlice from "../features/StateCitySlice/StateCitySlice";

const store = configureStore({
  reducer: {
    userLogged: userSlice,
    darkmode: DarkModeSlice,
    userData: UserDataSlice,
    selectedUser: SelectedUserSlice,
    states: StateCitySlice,
  },
});

export default store;
