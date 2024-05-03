-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false;
