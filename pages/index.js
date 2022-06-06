import prisma from 'prisma/prisma'
import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"
import Link from "next/link"
import { useRouter } from 'next/router'
import Recipe from 'components/Recipe'
import RecipeOptions from 'components/RecipeOptions'
import PortionPlaceholders from 'components/PortionPlaceholders'
import { useState } from 'react'

const Home = (props) => {
  const router = useRouter()
  const [numberOfDiners, setNumberOfDiners] = useState(1)
  const [numberOfDays, setNumberOfDays] = useState(3)
  const [portionsPerDay, setPortionsPerDay] = useState(2)
  const [currentPlan, setCurrentPlan] = useState(["Lasagne", "Kevätrullat", "Kulli"])

  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      <PortionPlaceholders 
        numberOfDiners={numberOfDiners}
        numberOfDays={numberOfDays}
        portionsPerDay={portionsPerDay}
        currentPlan={currentPlan}
        setCurrentPlan={setCurrentPlan}
      />
      <RecipeOptions 
        numberOfDiners={numberOfDiners}
        numberOfDays={numberOfDays}
        portionsPerDay={portionsPerDay}
        setNumberOfDiners={setNumberOfDiners}
        setNumberOfDays={setNumberOfDays}
        setPortionsPerDay={setPortionsPerDay}
      />
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
