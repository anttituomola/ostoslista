/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reciperow` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reciperow" DROP CONSTRAINT "Reciperow_ingredientId_fkey";

-- DropForeignKey
ALTER TABLE "Reciperow" DROP CONSTRAINT "Reciperow_recipeId_fkey";

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Reciperow";

-- CreateTable
CREATE TABLE "Reciperows" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amountPerPerson" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,

    CONSTRAINT "Reciperows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reciperows_ingredientId_key" ON "Reciperows"("ingredientId");

-- AddForeignKey
ALTER TABLE "Reciperows" ADD CONSTRAINT "Reciperows_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reciperows" ADD CONSTRAINT "Reciperows_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
