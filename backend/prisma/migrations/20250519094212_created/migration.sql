/*
  Warnings:

  - The `status` column on the `vpns` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `engineers` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "VPNStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- DropForeignKey
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_engineer_id_fkey";

-- DropForeignKey
ALTER TABLE "form_templates" DROP CONSTRAINT "form_templates_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_engineer_id_fkey";

-- AlterTable
ALTER TABLE "vpns" DROP COLUMN "status",
ADD COLUMN     "status" "VPNStatus" NOT NULL DEFAULT 'INACTIVE';

-- DropTable
DROP TABLE "admins";

-- DropTable
DROP TABLE "engineers";

-- CreateTable
CREATE TABLE "users" (
    "ID" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_templates" ADD CONSTRAINT "form_templates_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "users"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
