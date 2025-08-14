-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'ENGINEER');

-- CreateTable
CREATE TABLE "customers" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "admins" (
    "ID" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "engineers" (
    "ID" SERIAL NOT NULL,
    "role" "Role" NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "engineers_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "services" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,
    "form_template_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "customer_services" (
    "ID" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "service_id" INTEGER NOT NULL,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customer_services_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "vpns" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "peer_ip" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,
    "engineer_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vpns_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "form_templates" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_templates_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "section_templates" (
    "ID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "form_id" INTEGER NOT NULL,

    CONSTRAINT "section_templates_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "question_templates" (
    "ID" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "section_id" INTEGER NOT NULL,

    CONSTRAINT "question_templates_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "form_responses" (
    "ID" SERIAL NOT NULL,
    "filled_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "engineer_id" INTEGER NOT NULL,
    "customer_service_id" INTEGER NOT NULL,
    "form_template_id" INTEGER NOT NULL,

    CONSTRAINT "form_responses_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "section_responses" (
    "ID" SERIAL NOT NULL,
    "section_name" TEXT NOT NULL,
    "form_response_id" INTEGER NOT NULL,

    CONSTRAINT "section_responses_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "question_responses" (
    "ID" SERIAL NOT NULL,
    "question_text" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "section_response_id" INTEGER NOT NULL,

    CONSTRAINT "question_responses_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_name_key" ON "customers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- CreateIndex
CREATE UNIQUE INDEX "engineers_email_key" ON "engineers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customer_services_customer_id_service_id_key" ON "customer_services"("customer_id", "service_id");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_form_template_id_fkey" FOREIGN KEY ("form_template_id") REFERENCES "form_templates"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_services" ADD CONSTRAINT "customer_services_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_services" ADD CONSTRAINT "customer_services_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "engineers"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_templates" ADD CONSTRAINT "form_templates_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "admins"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_templates" ADD CONSTRAINT "section_templates_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "form_templates"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_templates" ADD CONSTRAINT "question_templates_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "section_templates"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "engineers"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_customer_service_id_fkey" FOREIGN KEY ("customer_service_id") REFERENCES "customer_services"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "form_responses" ADD CONSTRAINT "form_responses_form_template_id_fkey" FOREIGN KEY ("form_template_id") REFERENCES "form_templates"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section_responses" ADD CONSTRAINT "section_responses_form_response_id_fkey" FOREIGN KEY ("form_response_id") REFERENCES "form_responses"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question_responses" ADD CONSTRAINT "question_responses_section_response_id_fkey" FOREIGN KEY ("section_response_id") REFERENCES "section_responses"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
