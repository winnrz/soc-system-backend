/*
  Warnings:

  - You are about to drop the `question_responses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question_templates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `section_responses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `section_templates` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `response_data` to the `form_responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `config` to the `form_templates` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "question_responses" DROP CONSTRAINT "question_responses_section_response_id_fkey";

-- DropForeignKey
ALTER TABLE "question_templates" DROP CONSTRAINT "question_templates_section_id_fkey";

-- DropForeignKey
ALTER TABLE "section_responses" DROP CONSTRAINT "section_responses_form_response_id_fkey";

-- DropForeignKey
ALTER TABLE "section_templates" DROP CONSTRAINT "section_templates_form_id_fkey";

-- AlterTable
ALTER TABLE "form_responses" ADD COLUMN     "response_data" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "form_templates" ADD COLUMN     "config" JSONB NOT NULL;

-- DropTable
DROP TABLE "question_responses";

-- DropTable
DROP TABLE "question_templates";

-- DropTable
DROP TABLE "section_responses";

-- DropTable
DROP TABLE "section_templates";
