-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_ReciperowId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "ReciperowId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_ReciperowId_fkey" FOREIGN KEY ("ReciperowId") REFERENCES "Reciperow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
