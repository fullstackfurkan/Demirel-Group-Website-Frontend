CREATE TABLE `companies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`phoneNumber1` text,
	`phoneNumber2` text,
	`email` text,
	`footerText` text,
	`adress` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `projectImages` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`project_id` integer NOT NULL,
	`image_url` text NOT NULL,
	`display_order` integer DEFAULT 0,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`company_id` integer,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`location` text,
	`description` text,
	`cover_image` text,
	`is_active` integer DEFAULT true,
	`start_date` text,
	`finish_date` text,
	`type_of_apartment` text,
	`total_area` text,
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `projects_slug_unique` ON `projects` (`slug`);