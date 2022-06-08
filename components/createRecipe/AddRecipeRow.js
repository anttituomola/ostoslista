/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import styles from "/styles/AddRecipe.module.css"
import { v4 as uuid } from "uuid"
import { useRouter } from "next/router"

const AddRecipeRow = () => {
    const router = useRouter()
    const [addedIngredients, setAddedIngredients] = useState([])
    const [amountPerPerson, setAmountPerPerson] = useState()
    const [ingredientInput, setIngredient] = useState("")
    const [measureUnit, setMeasureUnit] = useState("")
    const measureUnits = ["g", "kg", "ml", "l", "kpl", "puntti",]
    const [selectedMonths, setSelectedMonths] = useState([])
    const allMonthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    console.log(router.query)

    const unitSelector = (unit) => {
        setMeasureUnit(unit)
    }

    const saveIngredients = () => {
        if (ingredientInput && measureUnit && amountPerPerson) {
            const ingredient = {
                id: uuid(),
                name: ingredientInput,
                seasons: selectedMonths,
            }
            const recipeRow = {
                id: uuid(),
                amountPerPerson: parseFloat(amountPerPerson),
                name: ingredientInput,
                unit: measureUnit,
                recipeId: router.query.recipeId,
                ingredientId: ingredient.id,
            }


            fetch("/api/addIngredient", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ingredient),
            })
                .then((res) => {
                    console.log(res)
                    setAddedIngredients([...addedIngredients, ingredient.name])
                    setIngredient("")
                    setMeasureUnit("")
                    setAmountPerPerson("")
                    setSelectedMonths([])
                })
                .catch((err) => {
                    console.log(err)
                })

                .then(() => {
                    if (router.query.recipeId) {
                        fetch("/api/addRecipeRow", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(recipeRow),
                        })
                            .then((res) => {
                                console.log(res)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }
                })
        }
    }

    const goToAddNewRecipe = () => {
        router.push("/admin/createRecipe")
    }

    const monthSelector = (month) => {
        if (selectedMonths.includes(month)) {
            setSelectedMonths(selectedMonths.filter((m) => m !== month))
        } else {
            const inputMonths = ([...selectedMonths, month])
            setSelectedMonths(inputMonths.sort((a, b) => a - b))
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

        }
        setSelectedMonths(selectedMonths.sort((a, b) => a - b))
    }

    return (
        <>
            <h1>Add ingredients for {router.query.recipeName}</h1>
            <div>
                <span>Ingredient</span>
                <input type="text" onChange={(event) => setIngredient(event.target.value)} value={ingredientInput} />
            </div>
            <div>
                <span>Amount per person</span>
                <input type="number" onChange={(event) => setAmountPerPerson(event.target.value)} value={amountPerPerson} />
            </div>
            <div>
                <span>Unit</span>
                {measureUnits.map(unit => <button
                    onClick={() => unitSelector(unit)}
                    key={unit}
                    className={measureUnit === unit ? styles.selected : styles.seasonButton}>
                    {unit}
                </button>)}
                <h3>Ingredient's seasons</h3>
                {allMonthNumbers.map(month => (
                    <button key={month} className={selectedMonths.includes(month) ? styles.selected : styles.seasonButton}
                        onClick={() => monthSelector(month)}>{month}</button>
                ))}
            </div>
            <button onClick={() => saveIngredients()}>Save ingredient</button>
            <h3>Added ingredients:</h3>
            {addedIngredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
            <button onClick={() => goToAddNewRecipe()}>Add new recipe</button>
        </>
    )
}

export default AddRecipeRow