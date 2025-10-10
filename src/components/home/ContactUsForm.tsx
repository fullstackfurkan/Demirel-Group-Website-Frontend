'use client'

import { CompanyInformationType } from "@/types";
import { useEffect, useState } from "react";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        phone: "",
        message: ""
    });

    const [companyData, setCompanyData] = useState<CompanyInformationType>();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/CompanyInformation`)
        .then(res => res.json())
        .then(data => setCompanyData(data))
    }, [])

    function handleOnFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const mailtoLink = `mailto:${companyData?.companyEmail}?subject=Yeni İletişim Formu&body=Ad: ${formData.name} ${formData.surname}%0ATelefon: ${formData.phone}%0AMesaj: ${formData.message}`;
        window.location.href = mailtoLink;
    }

    return (
        <section className="bg-brand-black md:h-76 w-[90vw] mt-6 p-10">
            <div className="text-white text-xl text-center md:text-start">
                Sizde Demirel Grup Projelerinde <div className="text-brand-yellow inline-block"> Yerinizi Alın...</div>
            </div>

            <div className="mt-6">
                <form onSubmit={handleSubmit} className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                        <input 
                            type="text"
                            name="name"
                            placeholder="Adınız"
                            value={formData.name}
                            onChange={handleOnFormChange}
                            className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"
                        />
                        <input 
                            type="text"
                            name="surname"
                            placeholder="Soyadınız"
                            value={formData.surname}
                            onChange={handleOnFormChange}
                            className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"
                        />
                        <input 
                            type="tel"
                            name="phone"
                            placeholder="Telefon Numaranız"
                            value={formData.phone}
                            onChange={handleOnFormChange}
                            className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"
                        />
                        <textarea
                            name="message"
                            placeholder="Mesajınız"
                            value={formData.message}
                            onChange={handleOnFormChange}
                            className="bg-white text-black rounded-xl p-4 w-[60vw] md:w-full"
                        />
                    </div>                   
                    <button type="submit" className="w-[60vw] mt-6 p-6 md:mt-0 md:w-64 md:ml-5 lg:ml-0 bg-brand-yellow rounded-xl text-white cursor-pointer">Formu Gönder</button>
                </form>
            </div>
        </section>
    )
}
