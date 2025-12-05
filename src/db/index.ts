import { getRequestContext } from "@cloudflare/next-on-pages";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
import type { D1Database } from '@cloudflare/workers-types';

interface CloudflareEnv {
    DB: D1Database;
}

export const getDb = () => {
    const { env } = getRequestContext() as unknown as { env: CloudflareEnv };

    if (!env || !env.DB) {
        if (process.env.NODE_ENV === 'development') {
            throw new Error("Veritabanı bulunamadı. Lütfen projeyi 'npm run pages:dev' ile başlattığından emin ol.");
        }
        throw new Error("Veritabanı bağlantısı kurulamadı.");
    }

    return drizzle(env.DB, { schema });
};