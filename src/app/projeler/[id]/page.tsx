'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CompanyInformationType, Project } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays, faLayerGroup, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectDetailPage() {
    const [projectData, setProjectData] = useState<Project>();
    const [companyData, setCompanyData] = useState<CompanyInformationType>();
    const parameter = useParams();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/Projects/${parameter.id}`)
            .then(res => res.json())
            .then(data => setProjectData(data));
    }, [parameter.id]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/CompanyInformation`)
            .then(res => res.json())
            .then(data => setCompanyData(data));
    }, []);

    if (!projectData) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <section className="container mx-auto p-8 flex flex-col items-center gap-12">
            {/* Ana proje görseli */}
            <div className="w-full max-w-4xl">
                <Image
                    src={projectData.photos[0]?.photoUrl ?? "/placeholder.png"}
                    alt="logo"
                    width={800}
                    height={500}
                    className="object-cover rounded-md"
                />
            </div>

            {/* Proje bilgileri */}
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
                <div>
                    <div className="text-brand-yellow font-bold text-xl">{companyData?.companyName}</div>
                    <h2 className="text-3xl font-bold py-3">{projectData.title}</h2>
                    <div className="py-4 text-gray-700">{projectData.details}</div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <InfoItem icon={faCalendar} label="Başlama Tarihi" value={projectData.startDate} />
                    <InfoItem icon={faCalendarDays} label="Bitiş Tarihi" value={projectData.endDate} />
                    <InfoItem icon={faLayerGroup} label="İnşaat Alanı" value={projectData.area} />
                    <InfoItem icon={faBuilding} label="Daire Tipi" value={projectData.apartmentType} />
                    <InfoItem icon={faLocationDot} label="Lokasyon" value={projectData.location} />
                    <InfoItem icon={faPhone} label="Bize Ulaşın" value={projectData.contactNumber} />
                </div>
            </div>

            {/* Swiper slider */}
            {projectData.photos && projectData.photos.length > 0 && (
                <div className="w-full max-w-6xl h-[80vh] relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="h-full rounded-md overflow-hidden"
                    >
                        {projectData.photos.map(photo => (
                            <SwiperSlide key={photo.id}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={photo.photoUrl}
                                        alt="project photo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            <div className="w-full max-w-4xl h-[400px] my-8">
                {projectData?.mapEmbedUrl ? (
                    <iframe
                        src={projectData.mapEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Harita bulunamadı
                    </div>
                )}
            </div>
        </section>
    );
}

// Tek bir bilgi kutusu component’i
function InfoItem({ icon, label, value }: { icon: IconDefinition; label: string; value?: string }) {
    return (
        <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={icon} size="2x" className="text-brand-yellow" />
            <div>
                <div className="font-bold text-lg">{label}</div>
                <div className="text-gray-700">{value ?? "-"}</div>
            </div>
        </div>
    );
}
