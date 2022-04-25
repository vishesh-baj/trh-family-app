import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/UserSlice";

const store = configureStore({
  reducer: {
    userLogged: userSlice,
  },
});

export default store;
