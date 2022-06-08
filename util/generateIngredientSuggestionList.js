const generateIngredientSuggestionList = (ingredients) => {
    const ingredientSuggestionList = []
    ingredients.map((ingredient) => {
        ingredientSuggestionList.push(ingredient.name)
    })
    console.log(ingredientSuggestionList)
    return ingredientSuggestionList
}

export default generateIngredientSuggestionList