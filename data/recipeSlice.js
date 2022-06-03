import { createSlice } from "@reduxjs/toolkit"
export const recipeSlice = createSlice({
    name: "recipeData",
    initialState: {
        recipes: []
    },

    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
    }
})
export const { increment, decrement, incrementByAmount } = recipeSlice.actions
export default recipeSlice.reducer