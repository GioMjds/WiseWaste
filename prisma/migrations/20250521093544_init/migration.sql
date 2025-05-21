/*
  Warnings:

  - You are about to drop the column `image_url` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "image_url",
ADD COLUMN     "profile_image" TEXT;
