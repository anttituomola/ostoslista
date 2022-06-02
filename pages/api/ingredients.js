import prisma from "../../prisma/prisma"

const ingredient = async (req, res) => {
    if (req.method === "GET") {
        try {
            const ingredients = await prisma.Ingredient.findMany()
            res.status(200).json(ingredients)
        } catch {
            res.status(500).json({ message: error })
        }
    }
}

export default ingredient