'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety, faCar, faBuilding } from "@fortawesome/free-solid-svg-icons";

export default function CompanyInformSection() {

    const allField = [
        { 
            fieldName: "Demireller Group İnşaat",
            explanation: "Demireller Group, modern mimariyi estetik ve sağlamlıkla buluşturan projelere imza atmaktadır. Kaliteli malzeme, yenilikçi tasarım ve uzman kadrosu ile güvenilir yaşam alanları inşa eden Demireller Group, sektördeki deneyimiyle hayallerinizi gerçeğe dönüştürüyor. Her projede müşteri memnuniyetini ön planda tutarak geleceğe değer katıyoruz.",
            icon: faHelmetSafety,
            href: "/projects/proje1"
         },
         { 
            fieldName: "Demireller Group Galeri",
            explanation: "Demireller Group kalitesiyle sizlere sunduğumuz galerimizde, güvenilir ve seçkin araç seçeneklerini bulabilirsiniz. Her bütçeye uygun, bakımları yapılmış ve güvenliği test edilmiş araçlarımızla, araç sahibi olmanın keyfini sorunsuz bir şekilde yaşamanız için çalışıyoruz. Güven, şeffaflık ve müşteri odaklı hizmet anlayışımızla Demireller Group farkını hissedin.",
            icon: faCar,
            href: "/projects/proje1"
         },{ 
            fieldName: "Demireller Group Gayrimenkul",
            explanation: "Gayrimenkul sektöründe güvenin adresi Demireller Group, yatırım ve yaşam için en doğru çözümleri sunuyor. Satılık konut, villa ve arsa seçenekleriyle müşterilerimize değerli fırsatlar sağlıyoruz. Uzman ekibimizle birlikte, ihtiyaçlarınıza uygun gayrimenkulü bulmanıza yardımcı oluyor, Demireller Group güvencesiyle geleceğinize yatırım yapmanızı sağlıyoruz.",
            icon: faBuilding,
            href: "/projects/proje1"
         }
    ]
    return (
        <section className="bg-[url('/images/biz-kimiz.png')] bg-black/90 bg-cover bg-center">
            <div className="py-12">
                <div className="text-center text-xl text-brand-yellow font-thin">Demirel Group Hakkında</div>
                <div className="text-center text-3xl text-white my-4 font-thin">BİZ KİMİZ? NELER YAPIYORUZ?</div>
                
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-3 p-5">
                    {allField.map((project) => (
                        <div key={project.fieldName} className="flex flex-col items-center w-full h-66 cursor-pointer hover:shadow-brand-gray shadow-lg rounded-lg transition-shadow duration-300  bg-black text-white p-3">
                            <div>
                                <FontAwesomeIcon icon={project.icon} className="text-brand-yellow" size="3x"/>
                            </div>
                            <div className="font-bold text-lg p-2">{project.fieldName}</div>
                            <div className="text-sm text-center">{project.explanation}</div>    
                            <div className="cursor-pointer text-brand-yellow mt-2">Devamı...</div>                 
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}