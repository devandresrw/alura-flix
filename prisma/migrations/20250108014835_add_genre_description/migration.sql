/*
  Warnings:

  - Added the required column `description` to the `Genre` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Genre" ADD COLUMN     "description" TEXT NOT NULL;
