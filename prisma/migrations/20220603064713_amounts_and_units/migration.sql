/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amountPerPeson` to the `Reciperow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit` to the `Reciperow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reciperow" ADD COLUMN     "amountPerPeson" INTEGER NOT NULL,
ADD COLUMN     "unit" TEXT NOT NULL;

-- DropTable
DROP TABLE "test";
