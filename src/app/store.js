import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";
import DarkModeSlice from "../features/user/DarkMode";
import UserDataSlice from "../features/user/UserDataSlice";
import SelectedUserSlice from "../features/user/SelectedUserSlice";
const store = configureStore({
  reducer: {
    userLogged: userSlice,
    darkmode: DarkModeSlice,
    userData: UserDataSlice,
    selectedUser: SelectedUserSlice,
  },
});

export default store;
