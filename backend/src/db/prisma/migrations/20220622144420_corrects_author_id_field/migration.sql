/*
  Warnings:

  - You are about to drop the column `author_id` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_author_id_fkey`;

-- AlterTable
ALTER TABLE `tasks` DROP COLUMN `author_id`,
    ADD COLUMN `authorId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
