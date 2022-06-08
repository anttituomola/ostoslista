import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import styles from "/styles/AddRecipe.module.css"
import { useRouter } from 'next/router'

const RecipeData = () => {
    const router = useRouter()
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
                setSelectedMonths([])
                router.push({
                    pathname: "/admin/createRecipeRow",
                    query: {
                        recipeId: recipe.id,
                        recipeName: recipe.name,
                    },
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const monthSelector = (month) => {
        if (selectedMonths.includes(month)) {
            setSelectedMonths(selectedMonths.filter((m) => m !== month))
        } else {
            setSelectedMonths([...selectedMonths, month])
        }
    }

    // Fill the missing months between the first and last month
    if (selectedMonths.length === 2) {
        const firstMonth = Math.min(...selectedMonths)
        const lastMonth = Math.max(...selectedMonths)
        const monthToAdd = firstMonth + 1
        if (lastMonth - firstMonth !== 1) {
            while (monthToAdd < lastMonth) {
                selectedMonths.push(monthToAdd)
                monthToAdd++
            }

            setSelectedMonths(selectedMonths.sort((a, b) => a - b))
        }
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
                    <button key={month} className={selectedMonths.includes(month) ? styles.selected : styles.seasonButton} 
                    onClick={() => monthSelector(month)}>{month}</button>
                ))}
            </div>
            <button onClick={saveRecipe}>Save Recipe</button>
        </div>
    )
}

export default RecipeData
