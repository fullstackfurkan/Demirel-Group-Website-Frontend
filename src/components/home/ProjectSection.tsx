'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import ContactUsForm from "./ContactUsForm";
import { useEffect, useState } from "react";
import { Project } from "@/types";

export default function ProjectSection() {

    const [projectData, setProjectData] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://localhost:7048/Projects')
            .then(res => res.json())
            .then(data => { setProjectData(data) })
    }, [])

    if (!projectData) return <div className="text-center py-20">Yükleniyor...</div>;

    return (
        <section className="flex flex-col items-center bg-[url('/images/bg-image.png')] bg-cover bg-center pb-8">
            <div className="pt-8">
                <div className="text-center text-3xl font-thin mb-5">PROJELERİMİZ</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                    {projectData.map((project) => (
                        <Link key={project.id} href={`/projeler/${project.id}`} className="lg:w-[25vw] cursor-pointer hover:shadow-brand-yellow shadow-xl rounded-lg transition-shadow duration-300 bg-white">
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={project.photos[0].photoUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="flex flex-col items-center p-4 font-thin">
                                <div className="font-bold text-lg p-2">{project.title}</div>
                                <div className="text-sm text-center">{project.details}</div>
                                <hr className="border-t border-gray-400 w-full my-2" />
                                <div className="flex w-full justify-between text-sm text-gray-400 p-2">
                                    <div className="flex">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow" />
                                        <div className="ml-1">{project.location}</div>
                                    </div>
                                    <div>{project.contactNumber}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <ContactUsForm />
        </section>
    )
}
