import prisma from 'prisma/prisma'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"

const allRecipes = (props) => {

    const { recipes, recipeRows, ingredients } = props
console.log(recipes)
    // List all recipes
    const recipeList = recipes.map(recipe => {
        return (
            <div key={recipe.id}>
                <h3>{recipe.name}</h3>
            </div>
        )
    })

    return (
        <div>{recipeList}</div>
    )
}

export default allRecipes

export async function getServerSideProps() {
    let recipes = await getRecipes(prisma)
    let recipeRows = await getRecipeRows(prisma)
    let ingredients = await getIngredients(prisma)

    recipes = JSON.parse(JSON.stringify(recipes))
    recipeRows = JSON.parse(JSON.stringify(recipeRows))
    ingredients = JSON.parse(JSON.stringify(ingredients))

    return {
        props: {
            recipes,
            recipeRows,
            ingredients
        }
    }
}