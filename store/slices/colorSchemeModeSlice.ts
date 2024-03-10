import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: "light",
};

const colorSchemeMode = createSlice({
  name: "colorSchemeMode",
  initialState: initialState,
  reducers: {
    darkMode: (state, action) => {
      state.colorScheme = action.payload;
    },
    whiteMode: (state, action) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { darkMode, whiteMode } = colorSchemeMode.actions;
export default colorSchemeMode.reducer;
