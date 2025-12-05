// src/app/admin/(auth)/login/actions.ts
'use server';

import { getDb } from '@/db';
import { admin } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';

const JWT_SECRET = new TextEncoder().encode('demireller-group-marmaraereglisi');

export async function loginAction(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    if (!username || !password) {
        return { error: 'Lütfen tüm alanları doldurun.' };
    }

    try {
        const db = getDb();

        // 1. Kullanıcıyı bul
        const user = await db.query.admin.findFirst({
            where: eq(admin.username, username)
        });

        if (!user) {
            return { error: 'Kullanıcı bulunamadı.' };
        }

        let isPasswordValid = false;

        if (user.password === password) {
            isPasswordValid = true; // Düz metin eşleşmesi (Güvensiz ama test için OK)
        } else {
            isPasswordValid = await bcrypt.compare(password, user.password); // Hash kontrolü
        }

        if (!isPasswordValid) {
            return { error: 'Şifre hatalı.' };
        }

        const token = await new SignJWT({ sub: user.id.toString(), username: user.username })
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('24h') // 24 saat geçerli
            .sign(JWT_SECRET);

        // 4. Çerezi Tarayıcıya Kaydet
        (await cookies()).set('admin_session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
        });

    } catch (err) {
        console.error('Login Hatası:', err);
        return { error: 'Bir hata oluştu.' };
    }

    // 5. Yönlendir (Try-Catch dışında olmalı)
    redirect('/admin');
}