/*
  Warnings:

  - You are about to drop the column `amountPerPeson` on the `Reciperow` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reciperow" DROP COLUMN "amountPerPeson",
ADD COLUMN     "amountPerPerson" DOUBLE PRECISION NOT NULL DEFAULT 0;
