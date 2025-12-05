// src/db/schema.ts
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import {relations} from "drizzle-orm";

// Şirket Bilgileri Tablosu
export const companyInfo = sqliteTable('companies', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    description: text('description'),
    phoneNumber1: text('phone_number_1'),
    phoneNumber2: text('phone_number_2'),
    email: text('email'),
    footerText: text('footerText'),
    address: text('address'),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

// Projeler Tablosu
export const projects = sqliteTable('projects', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    companyId: integer('company_id').references(() => companyInfo.id), // İlişki
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(), // URL dostu isim
    location: text('location'),
    description: text('description'),
    coverImage: text('cover_image'), // R2'den gelecek URL
    isActive: integer('is_active', { mode: 'boolean' }).default(true),
    startDate: text('start_date'), // Tarih
    finishDate: text('finish_date'),
    typeOfApartment: text('type_of_apartment'),
    totalArea: text('total_area'),
});

export const projectImages = sqliteTable("project_images", {
    id: integer('id').primaryKey({ autoIncrement: true }),
    projectId: integer('project_id').references(() => projects.id).notNull(),
    imageUrl: text('image_url').notNull(),
    displayOrder: integer('display_order').default(0)
});

export const admin = sqliteTable('admin', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    username: text('user_name').notNull(), // Kodda 'username', DB'de 'user_name'
    password: text('password').notNull(),
});

export const projectsRelations = relations(projects, ({ many }) => ({
    images: many(projectImages),
}));

export const projectImagesRelations = relations(projectImages, ({ one }) => ({
    project: one(projects, {
        fields: [projectImages.projectId],
        references: [projects.id],
    }),
}));