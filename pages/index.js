/* import prisma from "../prisma/prisma"
 */import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"
import Link from "next/link"
import { wrapper } from "store"
import { recipeActions } from 'data/recipeSlice'
import { useSelector } from 'react-redux'

const Home = (props) => {
  console.log("Props from index:", props)
  const recipesFromRedux = useSelector(state => state.recipes.recipes)
  console.log("Recipes from Redux", recipesFromRedux)

  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      {recipesFromRedux.map(recipe => (
        <div key={recipe.id}>
          <Link href={{
            pathname: `/recipes/${recipe.name}`,
            query: {
              recipeName: recipe.name,
              id: recipe.id,
              recipeSeasons: recipe.seasons,
            }
          }}>
            <h2>{recipe.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx) => {
  let recipes = await getRecipes(prisma)
  let recipeRows = await getRecipeRows(prisma)
  let ingredients = await getIngredients(prisma)

  recipes = await JSON.parse(JSON.stringify(recipes))
  recipeRows = await JSON.parse(JSON.stringify(recipeRows))
  ingredients = await JSON.parse(JSON.stringify(ingredients))

  store.dispatch(recipeActions.hydrateRecipes({
    recipes,
    recipeRows,
    ingredients,
  }))

  return {
    props: {
      recipes,
      recipeRows,
      ingredients
    }
  }  
})

/* export async function getServerSideProps() {
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
} */
