import prisma from "prisma/prisma"

const addIngredient = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { id, name, seasons } = req.body
            const ingredient = await prisma.ingredients.create({
                data: {
                    id,
                    name,
                    seasons,
                    }
            })
            res.statusCode = 200
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ "Added: " : ingredient }))
        } catch (err) {
            res.statusCode = 500
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ status: "error", message: err.message }))
        }
    }
}

export default addIngredient