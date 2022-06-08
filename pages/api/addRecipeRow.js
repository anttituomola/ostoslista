import prisma from "prisma/prisma"

const addRecipe = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { id, amountPerPerson, name, unit, recipeId, ingredientId } = req.body
            const recipeRow = await prisma.reciperows.create({
                data: {
                    id,
                    amountPerPerson,
                    name,
                    unit,
                    recipe: {
                        connect: {
                            id: recipeId
                        }
                    },
                    ingredients: {
                        connect: {
                            id: ingredientId
                        }
                    }
                }
            })
            res.statusCode = 200
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ "Added: " : recipeRow }))
        } catch (err) {
            res.statusCode = 500
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ status: "error", message: err.message }))
        }
    }
}

export default addRecipe