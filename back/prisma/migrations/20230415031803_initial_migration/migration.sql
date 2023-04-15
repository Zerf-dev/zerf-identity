-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('DEVELOPER', 'DESIGNER', 'PO', 'QA', 'CEO', 'CTO', 'COO', 'PM', 'PEOPLE');

-- CreateEnum
CREATE TYPE "Projects" AS ENUM ('ADELPHI', 'BH', 'DEVI', 'PJ', 'PRIOR', 'UBUNTU', 'YU', 'LICITA');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "userDataId" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data" (
    "id" SERIAL NOT NULL,
    "hairColor" TEXT NOT NULL,
    "project" "Projects" NOT NULL,
    "role" "Roles" NOT NULL,
    "hobbie" TEXT NOT NULL,
    "food" TEXT NOT NULL,
    "eyes" TEXT NOT NULL,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_userDataId_fkey" FOREIGN KEY ("userDataId") REFERENCES "data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
