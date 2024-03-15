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
      console.log("acvtion is ",action)
      state.colorSchemeBottomSheet.open = action.payload;
    },
    closeBottomSheet: (state, action) => {
         console.log("acvation is ", action);
      state.colorSchemeBottomSheet.open = !action.payload;
    },
  },
});

export const { openBottomSheet,closeBottomSheet } = ModalSlice.actions;

export default ModalSlice.reducer;
