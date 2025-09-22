'use client';

import { CompanyInformationType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hakkımızda() {
    
    const [companyData, setCompanyData] = useState<CompanyInformationType>();

    useEffect(() => {
        fetch('https://localhost:7048/CompanyInformation')
        .then(res => res.json())
        .then(data => setCompanyData(data))
        .catch(err => console.error(err));
    }, []);

    return(
        <section>
            {/* BACKGROUND IMAGE */}
            <div className="bg-[url('/images/top-cetvel.png')] bg-cover bg-center h-[5vh] w-full"></div>

            {/* CONTENT */}
            <div>
                <div className="md:flex p-15">
                    <div>
                        <div className="float-right max-w-[500] mb-5 md:m-5">
                            <Image 
                            src="/images/logo.png"
                            alt="logo"
                            width={1000}
                            height={750}
                            className='object-cover bg-brand-black relative z-10 p-5 mt-5 md:mt-0'
                            />
                        </div>
                        <h3 className="text-brand-yellow text-xl mb-3 font-bold">{companyData?.companyName}</h3>
                        <h2 className="text-3xl mb-3">HAKKIMIZDA</h2>
                        <p>Türkiye’de inşaat sektörünün öncüsü olma vizyonuyla yola çıkan Demirel Grup İnşaat, sahip olduğu güçlü insan kaynağı ve teknolojiye yaptığı yatırımlar sayesinde her gün insanların yaşamlarını iyileştirmeyi hedeflemektedir.</p>
                        <br />
                        <p>Teknoloji ile tasarımı uyum içinde harmanlayan Demirel Grup İnşaat, sektörde standartları sürekli yükseltmeyi ve hayata geçirdiği her projede bir adım daha ileri gitmeyi ilke edinmiştir.</p>
                        <br />
                        <p>Kurulduğu günden bu yana müşteri memnuniyetini ön planda tutan şirketimiz, yenilikçi yaklaşımı ve sürdürülebilir gelişim anlayışıyla sektöründe fark yaratmaktadır.</p>
                        <br />
                        <p>Kaliteden ödün vermeden dünya standartlarında projeler üreten Demirel Grup İnşaat, gelecekte de Türk inşaat sektörüne katkı sağlamaya ve değerlerini koruyarak ilerlemeye devam edecektir.</p>
                        <br />
                        <p>Ortak hedeflerimiz ve güçlü bağlarımız sayesinde büyük bir aile olarak yol alıyoruz. Sizleri de bu yolculuğumuzda yanımızda görmekten mutluluk duyarız.</p>
                        <br />
                        <div className="font-bold mt-4">Demirel Grup İnşaat – Daha Mutlu Bir Gelecek İçin Tüm Zamanını ve Yeteneklerini Adıyor.</div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}