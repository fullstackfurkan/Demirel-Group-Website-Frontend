import ContactUsForm from "@/components/home/ContactUsForm";
import Map from "@/components/home/Map";
import { faLocationDot, faMugHot, faPhone, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function İletisim() {
    return (
        <section>
            <div className="flex flex-col justify-center items-center my-10">
                <h1 className="text-6xl pt-12">İletişim</h1>
                <div className="flex flex-col md:flex-row mb-10">
                    <div className="flex flex-col justify-center items-center my-10 text-center">
                        <div><FontAwesomeIcon icon={faMugHot} className="text-brand-yellow p-4" size="5x"/></div>
                        <h3 className="font-bold text-2xl tracking-wider">OFİSİMİZE BEKLERİZ</h3>
                        <p className="p-3">Haftanın her günü ofisimize uğrayabilirsiniz. Sizinle tanışmayı çok isteriz.</p>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow" size="2x"/>
                            <div className="font-thin">Dereağzı, 6001. Sk. No:46, 59740 Marmaraereğlisi/Tekirdağ</div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center my-10 text-center">
                        <div><FontAwesomeIcon icon={faPhoneVolume} className="text-brand-yellow p-4" size="5x"/></div>
                        <h3 className="font-bold text-2xl tracking-wider">BİZİMLE İLETİŞİME GEÇİN</h3>
                        <p className="p-3">Ofisimize gelmeden projelerimiz hakkında bilgi almak için bizi arayabilirsiniz.</p>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-brand-yellow" size="2x"/>
                            <div className="font-thin">0533 652 1107 / 0537 217 7918</div>
                        </div>
                    </div>              
                </div>

                <ContactUsForm/>
            </div>
            <Map/>
        </section>
    )
}