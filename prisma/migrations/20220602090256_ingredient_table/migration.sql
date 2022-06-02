-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ReciperowId" TEXT NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_ReciperowId_key" ON "Ingredient"("ReciperowId");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_ReciperowId_fkey" FOREIGN KEY ("ReciperowId") REFERENCES "Reciperow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
