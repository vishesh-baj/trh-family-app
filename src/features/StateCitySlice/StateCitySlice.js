import { createSlice } from "@reduxjs/toolkit";
import { getCountry } from "../../app/helpers";

let initialState = getCountry();

const StateCitySlice = createSlice({
  name: "all-states",
  initialState,

  reducers: {
    getStatesData: (state) => {
      return state;
    },
  },
});

export const { getStatesData } = StateCitySlice.actions;

export default StateCitySlice.reducer;
