/*
  Warnings:

  - You are about to drop the `DataSoruce` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[data_source_id]` on the table `services` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE "DataSoruce";

-- CreateTable
CREATE TABLE "DataSource" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "data_source" TEXT NOT NULL,
    "event_count_average" INTEGER NOT NULL,
    "exception" TEXT,
    "comments" TEXT,

    CONSTRAINT "DataSource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DataSource_name_key" ON "DataSource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "services_data_source_id_key" ON "services"("data_source_id");

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_data_source_id_fkey" FOREIGN KEY ("data_source_id") REFERENCES "DataSource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
