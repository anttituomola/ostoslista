import { configureStore } from "@reduxjs/toolkit"
import recipeSlice from "./data/recipeSlice"

export default configureStore(  {
    reducer: {
        counter: recipeSlice
    }
})