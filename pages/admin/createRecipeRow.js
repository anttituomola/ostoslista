import AddRecipeRow from "components/createRecipe/AddRecipeRow"
import generateIngredientSuggestionList from "util/generateIngredientSuggestionList"
import prisma from "prisma/prisma"
import { getIngredients } from "data/hydrateData"

const createRecipeRow = (props) => {
  const ingredientSuggestionList = generateIngredientSuggestionList(props.ingredients)

  return (
    <AddRecipeRow ingredientSuggestionList={ingredientSuggestionList}/>
  )
}

export default createRecipeRow

export async function getServerSideProps() {
  let ingredients = await getIngredients(prisma)
  ingredients = JSON.parse(JSON.stringify(ingredients))

  return {
    props: {
      ingredients
    }
  }
}
