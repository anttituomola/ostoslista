import { recipeActions } from "./recipeSlice"
import store from "store"

export const hydrateRedux = async (recipes, recipeRows, ingredients) => {
    const allRecipes = await store.dispatch(recipeActions.hydrateRecipes(recipes))
    const allRecipesRows = await store.dispatch(recipeActions.hydrateRecipeRows(recipeRows))
    const allIngredients = await store.dispatch(recipeActions.hydrateIngredients(ingredients))
}