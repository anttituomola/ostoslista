
export const getRecipes = async (prisma) => {
    const allRecipes = await prisma.recipes.findMany()
    return allRecipes
}

export const getRecipeRows = async (prisma) => {
    const allRecipesRows = await prisma.reciperow.findMany()
    return allRecipesRows
}

export const getIngredients = async (prisma) => {
    const allIngredients = await prisma.ingredient.findMany()
    return allIngredients
}