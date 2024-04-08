import { configureStore } from "@reduxjs/toolkit";
import sliceCharacters from "../feature/charactersSlice"
const store = configureStore({
    reducer: {
        characters: sliceCharacters
    },
})

export default store