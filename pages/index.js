import prisma from "../prisma/prisma"
import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"

const Home = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
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
