import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";

export const displayCountrySlice = createSlice({
  name: "displayCountry",
  initialState: { value: initialCountry },
  reducers: {
    setDisplayCountry: (state, action) => {
      state.value = action.payload;
    },
    deleteDisplaycountry: (state) => {
      state.value = null;
    },
  },
});

export const {setDisplayCountry, deleteDisplaycountry} = displayCountrySlice.actions
export const selectDisplay = (state) => state.displayedCountry.value
export default displayCountrySlice.reducer