import prisma from "../../prisma/prisma"

const recipe = async (req, res) => {
    if (req.method === "GET") {
        try {
            const recipes = await prisma.Recipes.findMany()
            res.status(200).json(recipes)
        } catch {
            res.status(500).json({ message: error })
        }
    }
}

export default recipe