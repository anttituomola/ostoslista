import { createSlice } from "@reduxjs/toolkit"
export const recipeSlice = createSlice({
    name: "recipeData",
    initialState: {
        recipes: [],
        recipeRows: [],
        ingredients: [],
    },

    reducers: {
        addRecipe: (state, action) => {
            state.recipes.push(action.payload)
        },
        hydrateRecipes: (state, action) => {
            state.recipes = action.payload
        },
        hydrateRecipeRows: (state, action) => {
            state.recipeRows = action.payload
        },
        hydrateIngredients: (state, action) => {
            state.ingredients = action.payload
        },
    }
})
export const recipeActions = recipeSlice.actions
export default recipeSlice.reducer