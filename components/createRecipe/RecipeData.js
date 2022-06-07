import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import styles from "/styles/AddRecipe.module.css"

const RecipeData = () => {
    const [recipeName, setRecipeName] = useState('')
    const [selectedMonths, setSelectedMonths] = useState([])
    const allMonthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const saveRecipe = () => {
        const recipe = {
            id: uuid(),
            name: recipeName,
            seasons: selectedMonths
        }

        console.log(recipe)
        fetch("/api/addRecipe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        })
            .then((res) => {
                console.log(res)
                setRecipeName('')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    

    return (
        <div>
            <h1>Recipe Name</h1>
            <input
                placeholder="Enter recipe name"
                value={recipeName}
                onChange={e => setRecipeName(e.target.value)}
            />
            <div>
                <h3>Seasons</h3>
                {allMonthNumbers.map(month => (
                        <button key={month} className={styles.seasonButton}>{month}</button>
                ))}
            </div>
            <button onClick={saveRecipe}>Save Recipe</button>
        </div>
    )
}

export default RecipeData
