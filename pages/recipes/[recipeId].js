import { getRecipe } from "data/hydrateData"
import prisma from "prisma/prisma"

export default function UserProfile({ recipeId, recipe, ingredients }) {
  console.log("RecipeId:", recipeId)
  console.log("Recipe: ", recipe)
  console.log("Ingredients: ", ingredients)

  const ingredientsList = ingredients.map(ingredient => {
    return (
      <li key={ingredient.id}>
        {ingredient.id}: {ingredient.reciperow.amountPerPerson} {ingredient.reciperow.unit}
      </li>
    )
  })

  return <>
    <h2>{recipe[0].name}</h2>
      {ingredientsList}
  
  </>
}

export async function getServerSideProps({ params }) {
  const recipe = await getRecipe(prisma, params.recipeId)
  const recipeRows = await prisma.reciperow.findMany({
    where: {
      recipeId: params.recipeId
    }
  })
  const ingredients = await prisma.ingredient.findMany({
    where: {
      ReciperowId: { in: recipeRows.map(row => row.id) }
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

  return {
    props: {
      recipeId: params.recipeId,
      recipe,
      ingredients
    },
  }
}