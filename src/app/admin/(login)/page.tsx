// src/app/admin/(auth)/login/page.tsx
'use client'; // Form etkileşimi için client component olmalı

import { loginAction } from './actions';
import {useActionState} from "react";
import {useFormState} from "react-dom"; // Az önce oluşturduk

const initialState = {
    error: '',
};

export default function LoginPage() {
    // Server Action ile State'i bağlıyoruz
    const [state, formAction] = useFormState(loginAction, initialState);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <form action={formAction} className="flex w-full max-w-sm flex-col gap-6 rounded-lg bg-white p-8 shadow-md">

                <h2 className="text-2xl font-bold text-center text-gray-800">Giriş Yap</h2>

                {/* Hata Mesajı Gösterimi */}
                {state?.error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        {state.error}
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <label htmlFor="username" className="font-medium text-gray-700">Kullanıcı Adı</label>
                    <input
                        name="username" // actions.ts içinde formData.get('username') buraya bakıyor
                        id="username"
                        type="text"
                        required
                        className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-medium text-gray-700">Şifre</label>
                    <input
                        name="password"
                        id="password"
                        type="password"
                        required
                        className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
                    />
                </div>

                <button type="submit" className="rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition-colors">
                    Giriş Yap
                </button>
            </form>
        </div>
    );
}