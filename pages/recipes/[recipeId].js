import { getMathingRecipeRows, getMathingIngredients, getRecipes } from "data/hydrateData"
import prisma from "/prisma/prisma"

const portion = (props) => {
  console.log("Props from recipe: ", props)
  return (
    <div>
      <h1>Recipe: {props.recipeName}</h1>
      <h3>ID: {props.recipeId}</h3>
    </div>
  )
}

export default portion

export async function getServerSideProps(context) {
  // Get all recipeRows with matching recipeId
  let recipeRow = await getMathingRecipeRows(prisma, context.query.id)
  recipeRow = await JSON.parse(JSON.stringify(recipeRow))

  // Get ingredients for the portion
  const allRecipeRows = await recipeRow.map(row => row.id)
  let ingredients = await getMathingIngredients(prisma, ...allRecipeRows)
  ingredients = await JSON.parse(JSON.stringify(ingredients))

  return {
    props: {
      recipeName: context.query.recipeName,
      recipeId: context.query.id,
      recipeSeasons: context.query.recipeSeasons,
    }
  }
}
