/*
  Warnings:

  - You are about to drop the column `data_source_id` on the `services` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[data_source_id]` on the table `customer_services` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_data_source_id_fkey";

-- DropIndex
DROP INDEX "services_data_source_id_key";

-- AlterTable
ALTER TABLE "customer_services" ADD COLUMN     "data_source_id" INTEGER;

-- AlterTable
ALTER TABLE "services" DROP COLUMN "data_source_id";

-- CreateIndex
CREATE UNIQUE INDEX "customer_services_data_source_id_key" ON "customer_services"("data_source_id");

-- AddForeignKey
ALTER TABLE "customer_services" ADD CONSTRAINT "customer_services_data_source_id_fkey" FOREIGN KEY ("data_source_id") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
