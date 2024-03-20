import { configureStore } from "@reduxjs/toolkit";
import colorSchemeModeReducer from "./slices/colorSchemeModeSlice";
import modalReducer from "./slices/modalSlice";

const store=configureStore({
    reducer:{
        colorSchemeMode:colorSchemeModeReducer,
        ModalSlice:modalReducer
    }
})

export default store