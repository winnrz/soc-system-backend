/*
  Warnings:

  - You are about to drop the column `comments` on the `DataSource` table. All the data in the column will be lost.
  - You are about to drop the column `data_source` on the `DataSource` table. All the data in the column will be lost.
  - You are about to drop the column `event_count_average` on the `DataSource` table. All the data in the column will be lost.
  - You are about to drop the column `exception` on the `DataSource` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `DataSource` table. All the data in the column will be lost.
  - Added the required column `config` to the `DataSource` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DataSource_name_key";

-- AlterTable
ALTER TABLE "DataSource" DROP COLUMN "comments",
DROP COLUMN "data_source",
DROP COLUMN "event_count_average",
DROP COLUMN "exception",
DROP COLUMN "name",
ADD COLUMN     "config" JSONB NOT NULL;
