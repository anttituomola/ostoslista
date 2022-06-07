import { useState } from "react"
import styles from "/styles/AddRecipe.module.css"

const AddRecipeRow = () => {
    const [amountPerPerson, setAmountPerPerson] = useState(0)
    const [measureUnit, setMeasureUnit] = useState("")
    const measureUnits = ["g", "kg", "ml", "l", "kpl", "puntti",]

    const unitSelector = (unit) => {
        setMeasureUnit(unit)
    }

    return (
        <>
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
        </>
    )
}

export default AddRecipeRow