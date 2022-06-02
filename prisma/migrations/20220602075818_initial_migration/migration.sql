-- CreateTable
CREATE TABLE "recipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "seasons" INTEGER[],

    CONSTRAINT "recipes_pkey" PRIMARY KEY ("id")
);
