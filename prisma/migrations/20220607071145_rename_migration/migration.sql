/*
  Warnings:

  - You are about to drop the column `amountPerPeson` on the `Reciperow` table. All the data in the column will be lost.
  - Added the required column `amountPerPerson` to the `Reciperow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reciperow" DROP COLUMN "amountPerPeson",
ADD COLUMN     "amountPerPerson" DOUBLE PRECISION NOT NULL;
