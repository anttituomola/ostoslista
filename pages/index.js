import prisma from 'prisma/prisma'
import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"
import Link from "next/link"
import { useRouter } from 'next/router'
import Recipe from 'components/Recipe'

const Home = (props) => {
  const router = useRouter()
  console.log("Props from index:", props)

  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      <div className={styles.recipePlaceholder} onClick={() => router.push("/allRecipes")}>
        <h2>Select portion</h2>
      </div>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
          <Recipe recipe={recipe} />
        </div>
      ))}
    </div>
  )
}

export default Home

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
