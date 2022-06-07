import AddRecipeRow from "./AddRecipeRow"
import { useState } from "react"

const RecipeRow = () => {
  const [recipeRow, setRecipeRow] = useState([])

  const addRecipeRow = () => {
    console.log("AddRecipeRow")
    // Add "x" to recipeRow
    setRecipeRow([...recipeRow, "x"])
    console.log(recipeRow)
  }

  return (
    <>
        <h2>Add Recipe Rows</h2>
        {recipeRow.map(row => <AddRecipeRow key={row} />)}
        <button onClick={() => addRecipeRow()}>Add Recipe Row</button>
    </>
  )
}

export default RecipeRow