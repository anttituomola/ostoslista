/*
  Warnings:

  - You are about to drop the `recipes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recipes";

-- CreateTable
CREATE TABLE "Recipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seasons" INTEGER[],

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reciperow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "recipeId" TEXT NOT NULL,

    CONSTRAINT "Reciperow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reciperow" ADD CONSTRAINT "Reciperow_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
