/*
  Warnings:

  - You are about to drop the column `belongsToId` on the `Todo` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `Todo` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Added the required column `userId` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_belongsToId_fkey";

-- DropIndex
DROP INDEX "Todo_id_belongsToId_key";

-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "belongsToId",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "username" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
