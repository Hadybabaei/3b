/*
  Warnings:

  - Added the required column `userId` to the `Childs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Parents` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Childs" ADD COLUMN     "userId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "Parents" ADD COLUMN     "userId" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "Childs" ADD CONSTRAINT "Childs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parents" ADD CONSTRAINT "Parents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
