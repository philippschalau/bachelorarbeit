/*
  Warnings:

  - Added the required column `salutation` to the `UserData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserData" ADD COLUMN     "salutation" TEXT NOT NULL;
