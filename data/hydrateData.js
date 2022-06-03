
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

// Get all recipeRows with matching recipeId
export const getMathingRecipeRows = async (prisma, recipeId) => {
    const recipeRow = await prisma.reciperow.findMany({
        where: {
            recipeId: recipeId
        }
    })
    return recipeRow
}

// Get all ingredients with matching recipeRowId
export const getMathingIngredients = async (prisma, ...allRecipeRows) => {
    const ingredient = await prisma.ingredient.findMany({
        where: {
            ReciperowId: { in: allRecipeRows }
        },
        select: {
            id: true,
            reciperow: {
                select: {
                    amountPerPerson: true,
                    unit: true,
                }
            }
        }
    })
    return ingredient
}