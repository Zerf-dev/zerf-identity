-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_userDataId_fkey";

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "userDataId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "data"("id") ON DELETE SET NULL ON UPDATE CASCADE;
