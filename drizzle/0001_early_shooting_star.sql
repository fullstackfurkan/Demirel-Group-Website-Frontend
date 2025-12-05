CREATE TABLE `project_images` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`project_id` integer NOT NULL,
	`image_url` text NOT NULL,
	`display_order` integer DEFAULT 0,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
DROP TABLE `projectImages`;--> statement-breakpoint
ALTER TABLE `companies` ADD `phone_number_1` text;--> statement-breakpoint
ALTER TABLE `companies` ADD `phone_number_2` text;--> statement-breakpoint
ALTER TABLE `companies` ADD `address` text;--> statement-breakpoint
ALTER TABLE `companies` DROP COLUMN `phoneNumber1`;--> statement-breakpoint
ALTER TABLE `companies` DROP COLUMN `phoneNumber2`;--> statement-breakpoint
ALTER TABLE `companies` DROP COLUMN `adress`;