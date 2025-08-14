/*
  Warnings:

  - The primary key for the `customer_services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `customer_services` table. All the data in the column will be lost.
  - The primary key for the `customers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `customers` table. All the data in the column will be lost.
  - The primary key for the `form_responses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `form_responses` table. All the data in the column will be lost.
  - The primary key for the `form_templates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `form_templates` table. All the data in the column will be lost.
  - The primary key for the `question_responses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `question_responses` table. All the data in the column will be lost.
  - The primary key for the `question_templates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `question_templates` table. All the data in the column will be lost.
  - The primary key for the `section_responses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `section_responses` table. All the data in the column will be lost.
  - The primary key for the `section_templates` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `section_templates` table. All the data in the column will be lost.
  - The primary key for the `services` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `services` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `users` table. All the data in the column will be lost.
  - The primary key for the `vpns` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `vpns` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "customer_services" DROP CONSTRAINT "customer_services_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "customer_services" DROP CONSTRAINT "customer_services_service_id_fkey";

-- DropForeignKey
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_customer_service_id_fkey";

-- DropForeignKey
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_engineer_id_fkey";

-- DropForeignKey
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_form_template_id_fkey";

-- DropForeignKey
ALTER TABLE "form_templates" DROP CONSTRAINT "form_templates_created_by_id_fkey";

-- DropForeignKey
ALTER TABLE "question_responses" DROP CONSTRAINT "question_responses_section_response_id_fkey";

-- DropForeignKey
ALTER TABLE "question_templates" DROP CONSTRAINT "question_templates_section_id_fkey";

-- DropForeignKey
ALTER TABLE "section_responses" DROP CONSTRAINT "section_responses_form_response_id_fkey";

-- DropForeignKey
ALTER TABLE "section_templates" DROP CONSTRAINT "section_templates_form_id_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_form_template_id_fkey";

-- DropForeignKey
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_admin_id_fkey";

-- DropForeignKey
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_engineer_id_fkey";

-- AlterTable
ALTER TABLE "customer_services" DROP CONSTRAINT "customer_services_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "customer_services_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "customers" DROP CONSTRAINT "customers_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "customers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "form_responses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "form_templates" DROP CONSTRAINT "form_templates_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "form_templates_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "question_responses" DROP CONSTRAINT "question_responses_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "question_responses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "question_templates" DROP CONSTRAINT "question_templates_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "question_templates_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "section_responses" DROP CONSTRAINT "section_responses_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "section_responses_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "section_templates" DROP CONSTRAINT "section_templates_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "section_templates_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "services" DROP CONSTRAINT "services_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "services_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "ID",
DROP COLUMN "refreshToken",
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "refresh_token" TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_pkey",
DROP COLUMN "ID",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "vpns_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_form_template_id_fkey" FOREIGN KEY ("form_template_id") REFERENCES "form_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_services" ADD CONSTRAINT "customer_services_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_services" ADD CONSTRAINT "customer_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_templates" ADD CONSTRAINT "form_templates_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_templates" ADD CONSTRAINT "section_templates_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "form_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_templates" ADD CONSTRAINT "question_templates_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_customer_service_id_fkey" FOREIGN KEY ("customer_service_id") REFERENCES "customer_services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_form_template_id_fkey" FOREIGN KEY ("form_template_id") REFERENCES "form_templates"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_responses" ADD CONSTRAINT "section_responses_form_response_id_fkey" FOREIGN KEY ("form_response_id") REFERENCES "form_responses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_responses" ADD CONSTRAINT "question_responses_section_response_id_fkey" FOREIGN KEY ("section_response_id") REFERENCES "section_responses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
