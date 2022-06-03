import { getMathingRecipeRows, getMathingIngredients } from "data/hydrateData"
import prisma from "/prisma/prisma"

const portion = (props) => {
  console.log("Props from recipe: ", props)
  const ingredientsList = props.ingredients.map(ingredient => (
    <li key={ingredient.id}>
      {ingredient.id} {ingredient.reciperow.amountPerPerson} {ingredient.reciperow.unit}
    </li>
  ))

  return (
    <div>
      <h1>{props.recipeName}</h1>
      <h3>ID: {props.recipeId}</h3>
      {ingredientsList}
    </div>
  )
}

export default portion

export async function getStaticProps(context) {
  // Get all recipeRows with matching recipeId
  let recipeRow = await getMathingRecipeRows(prisma, context.query.id)
  recipeRow = JSON.parse(JSON.stringify(recipeRow))

  // Get ingredients for the portion
  const allRecipeRows = await recipeRow.map(row => row.id)
  let ingredients = await getMathingIngredients(prisma, ...allRecipeRows)
  ingredients = JSON.parse(JSON.stringify(ingredients))

  return {
    props: {
      recipeName: context.query.recipeName,
      recipeId: context.query.id,
      recipeSeasons: context.query.recipeSeasons,
      recipeRow,
      ingredients
    }
  }
}