export const getRecipes = async (prisma) => {
    const recipes = await prisma.recipes.findMany()
    return recipes
}

export const getRecipeRows = async (prisma) => {
    const recipeRows = await prisma.reciperows.findMany()
    return recipeRows
}

export const getIngredients = async (prisma) => {
    const allIngredients = await prisma.ingredients.findMany()
    return allIngredients
}

// Get a single recipe with matching id
export const getRecipe = async (prisma, recipeId) => {
    const recipe = await prisma.recipes.findMany({
        where: {
            id: recipeId,
        }
    })
    return recipe
}

// Get all recipeRows with matching recipeId
export const getMathingRecipeRows = async (prisma, recipeId) => {
    const recipeRow = await prisma.reciperows.findMany({
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
            reciperows: {
                select: {
                    amountPerPerson: true,
                    unit: true,
                }
            }
        }
    })
    return ingredient
}