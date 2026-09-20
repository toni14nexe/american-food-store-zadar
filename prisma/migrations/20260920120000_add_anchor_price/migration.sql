-- AlterTable
-- Add anchorPrice as nullable first so existing rows are not touched/dropped,
-- then backfill every existing product with its current price as the anchor
-- price (Zakon o sidrenim cijenama, obveza od 01.10.2026.), and only then
-- enforce NOT NULL. No data is deleted at any step.
ALTER TABLE "Product" ADD COLUMN "anchorPrice" DECIMAL(10,2);

UPDATE "Product" SET "anchorPrice" = "price" WHERE "anchorPrice" IS NULL;

ALTER TABLE "Product" ALTER COLUMN "anchorPrice" SET NOT NULL;
