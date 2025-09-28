'use client'

// Fonts
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

// Next & React Components/Variables
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";

// Speacial Types
import { CompanyInformationType } from "@/types";

export default function Footer() {

    const pathName = usePathname();
    const [companyData, setCompanyData] = useState<CompanyInformationType>();
    const navLinks = [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Projeler", href: "/projeler" },
        { label: "İletişim", href: "/iletisim" },]

    useEffect(() => {
        fetch("https://localhost:7048/CompanyInformation")
            .then(res => res.json())
            .then((data: CompanyInformationType) => setCompanyData(data))
            .catch((err) => console.error(err))
    }, []);

    if (!companyData) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <footer>
            <div className="flex flex-col justify-between items-center lg:flex-row gap-8 bg-[url('/images/biz-kimiz.png')] bg-black/90 bg-cover bg-center p-16">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={200}
                    height={36} />

                <div className="text-white w-[40vw]">
                    {companyData?.footerText}
                </div>

                <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${pathName === link.href ? "text-brand-yellow" : "text-white"} hover:text-brand-yellow transition-colors duration-200 text-lg`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="text-white">
                    <div className="text-3xl font-thin">İletişim</div>
                    <div className="mt-2">
                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <div className="font-bold">{companyData?.contactNumber1}</div>
                        </div>

                        <div className="flex gap-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <div className="font-bold">{companyData?.contactNumber2}</div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-2">
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
            </div>

        </footer>
    )
}