-- AlterTable
ALTER TABLE "services" ADD COLUMN     "data_source_id" INTEGER;

-- AlterTable
ALTER TABLE "vpns" ADD COLUMN     "comments" TEXT,
ADD COLUMN     "contacts" TEXT;

-- CreateTable
CREATE TABLE "DataSoruce" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DataSoruce_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DataSoruce_name_key" ON "DataSoruce"("name");
