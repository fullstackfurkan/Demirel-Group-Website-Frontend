'use client'

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

type Project = {
    id: number;
    title: string;
    category: string;
    startDate: Date;
    endDate: Date;
    area: string;
    apartmentType: string;
    numberOfApartment: number;
    numberOfStore: number;
    contactNumber: number;
    detais: string;
    photos: string[];
}

export default function ProjectDetailPage() {

    const { id } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(!id) return;

        const fetchProject = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/projects/${id}`);
                const data = await res.json();
                setProject(data);
            }
            catch(error) {
                console.error("Proje detayı çekilemedi:", error)
            }
            finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if(loading) return <p className="p-6">Yükleniyor...</p>
    if(!project) return <p className="p-6">Proje bulunamadı.</p>

    return (
        <div>
            
        </div>
    )
}