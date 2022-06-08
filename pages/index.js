import prisma from 'prisma/prisma'
import styles from '../styles/Home.module.css'
import { getIngredients, getRecipeRows, getRecipes } from "../data/hydrateData"
import RecipeOptions from 'components/RecipeOptions'
import PortionPlaceholders from 'components/PortionPlaceholders'
import { useState, useRef } from 'react'

const Home = (props) => {
  const modalRef = useRef(null)

  const [numberOfDiners, setNumberOfDiners] = useState(1)
  const [numberOfDays, setNumberOfDays] = useState(3)
  const [portionsPerDay, setPortionsPerDay] = useState(2)
  const [currentPlan, setCurrentPlan] = useState([])

  const buildPlan = () => {
    const portionsNeeded = numberOfDays * portionsPerDay
    while (portionsNeeded > currentPlan.length) {
      const recipe = props.recipes[Math.floor(Math.random() * props.recipes.length)]
      // We need the index to change the correct portion in modal
      const recipeWithIndex = { ...recipe, index: currentPlan.length }
      // add recipe to currentPlan
      currentPlan.push(recipeWithIndex)
    }
    console.log(currentPlan)
  }

  const changeRecipe = (index, recipe) => {
    let newPlan = [...currentPlan]
    newPlan.splice(index, 1, recipe)
    setCurrentPlan(newPlan)
    modalRef.current.closeModal()
  }

  buildPlan()

  return (
    <div className={styles.container}>
      <h1>Ostoslistageneraattori</h1>
      <PortionPlaceholders
        numberOfDiners={numberOfDiners}
        numberOfDays={numberOfDays}
        portionsPerDay={portionsPerDay}
        currentPlan={currentPlan}
        setCurrentPlan={setCurrentPlan}
        recipes={props.recipes}
        recipeRows={props.recipeRows}
        changeRecipe={changeRecipe}
        ref={modalRef}
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
