'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function CompanyInformSection() {

    const allProjects = [
        { 
            projectName: "Sanayi Dış",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         },
         { 
            projectName: "Sanayi Dış1",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         },{ 
            projectName: "Sanayi Dış2",
            photoLink: "/images/proje4/örnek1.jpg",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempora architecto accusantium, nihil sunt laborum ab animi exercitationem ea voluptates delectus repudiandae ipsum placeat voluptatibus, laudantium, recusandae maxime sed provident ex totam pariatur libero natus! Fugit esse itaque omnis explicabo?",
            location: "İstanbul Sanayi",
            href: "/projects/proje1"
         }
    ]
    return (
        <section className="bg-[url('/images/bg-image.png')] bg-cover bg-center">
            <div className="pt-8">
                {/* CARD HEADER */}
                <div className="text-center text-3xl font-thin">PROJELERİMİZ</div>
                {/* CARD CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3">
                    {allProjects.map((project) => (
                        // CARD PHOTO
                        <div key={project.projectName} className="cursor-pointer hover:shadow-brand-yellow shadow-xl rounded-lg transition-shadow duration-300  bg-white">
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                src={project.photoLink}
                                alt="logo"
                                fill
                                className="object-cover rounded-t-lg"
                            />
                            </div>
                            {/* CARD DETAİLS */}
                            <div className="flex flex-col items-center p-4 font-thin">
                                <div className="font-bold text-lg p-2">{project.projectName}</div>
                                <div className="text-sm text-center">{project.content}</div>
                                <hr className="border-t border-gray-400 w-full my-2"/>
                                <div className="flex w-full justify-between text-sm text-gray-400 p-2">
                                    <div className="flex">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-brand-yellow"/>
                                        <div className="text-">{project.location}</div>
                                    </div>
                                    <div>0 544 444 44 44</div>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}