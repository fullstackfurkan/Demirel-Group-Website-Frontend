import ContactUsForm from "@/components/home/ContactUsForm";
import Map from "@/components/home/Map";
import { faLocationDot, faMugHot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function İletisim() {
    return (
        <section>
            <div className="flex flex-col justify-center items-center pb-6">
                <h1 className="text-6xl p-4">İletişim</h1>
                <div className="flex">
                    <div className="flex flex-col justify-center items-center">
                        <div><FontAwesomeIcon icon={faMugHot} className="text-brand-yellow p-4" size="5x"/></div>
                        <h3 className="font-bold text-2xl tracking-wider">OFİSİMİZE BEKLERİZ</h3>
                        <p className="p-3">Haftanın her günü ofisimize uğrayabilirsiniz. Sizinle tanışmayı çok isteriz.</p>
                        <address className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow" size="2x"/>
                            <div className="font-thin">Mehmet Akif Ersoy, 1828. Sk. 23 / A D:1, 34515 Esenyurt/İstanbul</div>
                        </address>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <div><FontAwesomeIcon icon={faPhone} className="text-brand-yellow p-4" size="5x"/></div>
                        <h3 className="font-bold text-2xl tracking-wider">BİZİMLE İLETİŞİME GEÇİN</h3>
                        <p className="p-3">Ofisimize gelmeden projelerimiz hakkında bilgi almak için bizi arayabilirsiniz.</p>
                        <address className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow" size="2x"/>
                            <div className="font-thin">Mehmet Akif Ersoy, 1828. Sk. 23 / A D:1, 34515 Esenyurt/İstanbul</div>
                        </address>
                    </div>              
                </div>

                <ContactUsForm/>
            </div>
            <Map/>
        </section>
    )
}