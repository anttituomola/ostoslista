import { prisma } from "@prisma/client"

export const getRecipes = async (prisma) => {
    const allRecipes = await prisma.test.findMany()
    return allRecipes
}