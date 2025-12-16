'use client'

import Image from "next/image"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation"
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
    const navLinks = [
        { label: "Anasayfa", href: "/" },
        { label: "Hakkımızda", href: "/hakkimizda" },
        { label: "Projeler", href: "/projeler" },
        { label: "İletişim", href: "/iletisim" },
    ]
    const router = useRouter();
    const pathName = usePathname();
    const [menuState, setMenuState] = useState(false)

    function handleMenuButtonClick() {
        setMenuState(!menuState)
    }

    return (
        <nav>
            {/* Logo */}  
            <div className="flex justify-between items-center bg-[url('/images/biz-kimiz.png')] bg-black/90 bg-cover bg-center shadow w-full py-4 px-[10%]">
                <div onClick={() => router.push("/")} className="cursor-pointer">
                <Image 
                src="/images/logo.png"
                alt="Logo" 
                width={100}
                height={16}
                unoptimized={true}/>
                </div>

                {/* Desktop Navbar Menü */}
                <div className="hidden md:flex gap-8">
                   {navLinks.map((link) => (
                    <Link 
                        key={link.href}  
                        href={link.href} 
                        className={`${pathName === link.href ? "text-brand-yellow" : "text-white"} hover:text-brand-yellow transition-colors duration-200 text-lg`}>
                    {link.label}
                    </Link>
                   ))}
                </div>

                <button onClick={handleMenuButtonClick} className="md:hidden cursor-pointer">
                    <FontAwesomeIcon icon={faBars} color="white" size="2x"/>        
                </button>
            </div>           

            {/* Mobile Navbar Menu */}
            <div className={`flex flex-col items-center md:hidden bg-brand-black overflow-hidden transition-all duration-400 ease-in-out
            ${menuState ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
               {navLinks.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={`${pathName === link.href ? "bg-brand-yellow" : "bg-brand-black"}
                     hover:bg-brand-yellow text-white w-full transition-colors duration-200 text-xl py-3 text-center`}>
                    {link.label}
                    </Link>
               ))}
            </div>
        </nav>
    )
}