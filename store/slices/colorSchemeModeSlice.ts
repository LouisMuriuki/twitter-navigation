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
    defaultMode: (state, action) => {
      if (action.payload === "system") {
        // @ts-expect-error
        state.colorScheme = null;
      }
    },
  },
});

export const { darkMode, whiteMode,defaultMode } = colorSchemeMode.actions;
export default colorSchemeMode.reducer;
