-- 1. Add new columns first
ALTER TABLE "form_responses" ADD COLUMN "filled_by_id" INTEGER;
ALTER TABLE "vpns" ADD COLUMN "updated_by_id" INTEGER;

-- 2. Copy data from old columns to new ones
UPDATE "form_responses" SET "filled_by_id" = "engineer_id" WHERE "engineer_id" IS NOT NULL;
UPDATE "vpns" SET "updated_by_id" = "engineer_id" WHERE "engineer_id" IS NOT NULL;

-- 3. Drop old foreign keys and columns
ALTER TABLE "form_responses" DROP CONSTRAINT "form_responses_engineer_id_fkey";
ALTER TABLE "vpns" DROP CONSTRAINT "vpns_engineer_id_fkey";

ALTER TABLE "form_responses" DROP COLUMN "engineer_id";
ALTER TABLE "vpns" DROP COLUMN "engineer_id";

-- 4. Add new foreign keys
ALTER TABLE "form_responses"
  ADD CONSTRAINT "form_responses_filled_by_id_fkey"
  FOREIGN KEY ("filled_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "vpns"
  ADD CONSTRAINT "vpns_updated_by_id_fkey"
  FOREIGN KEY ("updated_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
