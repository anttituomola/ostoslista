import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

export const recipeSlice = createSlice({
    name: "recipes",
    initialState: {
        recipes: [],
        recipeRows: [],
        ingredients: [],
    },

    reducers: {
        hydrateRecipes: (state, action) => {
            state.recipes = action.payload.recipes
            state.recipeRows = action.payload.recipeRows
            state.ingredients = action.payload.ingredients
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.recipes = action.payload.recipes.recipes
            state.recipeRows = action.payload.recipes.recipeRows
            state.ingredients = action.payload.recipes.ingredients
        },
    },
})
export const recipeActions = recipeSlice.actions
export default recipeSlice.reducer