-- DropForeignKey
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_engineer_id_fkey";

-- AlterTable
ALTER TABLE "vpns" ALTER COLUMN "engineer_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "vpns" ADD CONSTRAINT "vpns_engineer_id_fkey" FOREIGN KEY ("engineer_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
