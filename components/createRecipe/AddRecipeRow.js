import { useState } from "react"
import styles from "/styles/AddRecipe.module.css"
import { v4 as uuid } from "uuid"
import { useRouter } from "next/router"

const AddRecipeRow = () => {
    const router = useRouter()
    const [amountPerPerson, setAmountPerPerson] = useState(0)
    const [ingredientInput, setIngredient] = useState("")
    const [measureUnit, setMeasureUnit] = useState("")
    const measureUnits = ["g", "kg", "ml", "l", "kpl", "puntti",]

    console.log(router.query)

    const unitSelector = (unit) => {
        setMeasureUnit(unit)
    }

    const saveIngredients = () => {
        console.log("clicked")
        const ingredient = {
            id: uuid(),
            name: ingredientInput,
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
            })
            .catch((err) => {
                console.log(err)
            })

            .then(() => {
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
                    }
                    )
            }
            )
    }


        return (
            <>
                <h1>Add ingredients for {router.query.recipeName}</h1>
                <div>
                    <span>Ingredient</span>
                    <input type="text" onChange={(event) => setIngredient(event.target.value)} />
                </div>
                <div>
                    <span>Amount per person</span>
                    <input type="number" onChange={(event) => setAmountPerPerson(event.target.value)} />
                </div>
                <div>
                    <span>Unit</span>
                    {measureUnits.map(unit => <button
                        onClick={() => unitSelector(unit)}
                        key={unit}
                        className={measureUnit === unit ? styles.selected : styles.seasonButton}>
                        {unit}
                    </button>)}
                </div>
                <button onClick={() => saveIngredients()}>Save ingredient</button>
            </>
        )
    }

    export default AddRecipeRow