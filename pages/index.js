import prisma from "../prisma/prisma"
import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"
import Link from "next/link"

const Home = (props) => {
  console.log("Props from index:", props)
  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
          <Link href={{
            pathname: `/recipes/${recipe.name}`,
            query: {
              recipeName: recipe.name,
              id: recipe.id,
              recipeSeasons: recipe.seasons,
            },
          }}>
            <h2>{recipe.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Home

export async function getStaticProps() {
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
