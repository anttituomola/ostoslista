import prisma from "prisma/prisma"

const addRecipe = async (req, res) => {
    if (req.method === "POST") {
        try {
            const { name, id, seasons } = req.body
            const recipe = await prisma.recipes.create({
                data: {
                    id,
                    name,
                    seasons,
                }
            })

            res.statusCode = 200
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ status: "ok" }))
        } catch (err) {
            res.statusCode = 500
            res.setHeader("Content-Type", "application/json")
            res.end(JSON.stringify({ status: "error", message: err.message }))
        }
    }
}

export default addRecipe