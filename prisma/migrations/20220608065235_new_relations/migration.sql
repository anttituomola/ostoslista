/*
  Warnings:

  - You are about to drop the column `ReciperowId` on the `Ingredient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ingredientId]` on the table `Reciperow` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ingredientId` to the `Reciperow` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_ReciperowId_fkey";

-- DropIndex
DROP INDEX "Ingredient_ReciperowId_key";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "ReciperowId";

-- AlterTable
ALTER TABLE "Reciperow" ADD COLUMN     "ingredientId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Reciperow_ingredientId_key" ON "Reciperow"("ingredientId");

-- AddForeignKey
ALTER TABLE "Reciperow" ADD CONSTRAINT "Reciperow_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
