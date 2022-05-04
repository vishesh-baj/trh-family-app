import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";
import DarkModeSlice from "../features/user/DarkMode";
import UserDataSlice from "../features/user/UserDataSlice";
import SelectedUserSlice from "../features/user/SelectedUserSlice";
import NavbarSlice from "../features/nav/NavbarSlice";

const store = configureStore({
  reducer: {
    userLogged: userSlice,
    darkmode: DarkModeSlice,
    userData: UserDataSlice,
    selectedUser: SelectedUserSlice,
    sidebarToggle: NavbarSlice,
  },
});

export default store;
