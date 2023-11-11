/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[googleId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Childs" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3),
    "gender" TEXT,
    "birth_weight" TEXT,
    "birth_country" TEXT,
    "birth_city" TEXT,
    "birth_place" TEXT,
    "hospital_name" TEXT,
    "type_of_delivery" TEXT,
    "multiple_birth" TEXT,

    CONSTRAINT "Childs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parents" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "type_of_relationship" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3),
    "weight" TEXT,
    "birth_country" TEXT,
    "birth_city" TEXT,
    "height" TEXT,
    "education" TEXT,
    "work_or_not" BOOLEAN,
    "planing_on_working" BOOLEAN,
    "occupation" TEXT,
    "number_of_pregnancy" INTEGER,
    "number_of_miscarriage" INTEGER,
    "first_miscarriage_date" TIMESTAMP(3),
    "second_miscarriage_date" TIMESTAMP(3),
    "ever_smoked" BOOLEAN,
    "is_smooking" BOOLEAN,
    "smoking_quite" TEXT,
    "smoking_quite_date" TIMESTAMP(3),
    "ever_drunk" BOOLEAN,
    "is_drinking" BOOLEAN,
    "drinking_quite" TEXT,
    "drinking_quite_date" TIMESTAMP(3),
    "gender" TEXT,

    CONSTRAINT "Parents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentsOnChilds" (
    "childId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ParentsOnChilds_pkey" PRIMARY KEY ("childId","parentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_googleId_key" ON "Users"("googleId");

-- AddForeignKey
ALTER TABLE "ParentsOnChilds" ADD CONSTRAINT "ParentsOnChilds_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Childs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentsOnChilds" ADD CONSTRAINT "ParentsOnChilds_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
