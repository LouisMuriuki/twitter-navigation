import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  colorSchemeBottomSheet: {
    open: false,
  },
};
const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState,
  reducers: {
    openBottomSheet: (state, action) => {
      state.colorSchemeBottomSheet.open = action.payload;
    },
    closeBottomSheet: (state, action) => {
      state.colorSchemeBottomSheet.open = !action.payload;
    },
  },
});

export const { openBottomSheet,closeBottomSheet } = ModalSlice.actions;

export default ModalSlice.reducer;
