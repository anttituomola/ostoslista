import prisma from "../../prisma/prisma"

const recipeRow = async (req, res) => {
    if (req.method === "GET") {
        try {
            const recipeRows = await prisma.Reciperow.findMany()
            res.status(200).json(recipeRows)
        } catch {
            res.status(500).json({ message: error })
        }
    }
}

export default recipeRow